import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';


// Putting information about a specific movie in an easy to understand object
const movieInformation = (movie) => {
  const newMovieInfo = {
    thumbnail: movie.poster,
    title: movie.title,
    year: movie.year,
    genres: movie.genres
  }
  return newMovieInfo;
};
// This function is meant to solve a probem with the API
// Where the string has gaps
const getGenresString = (genres) => {
  let string = '';
  for(index in genres) {
    if(index == 0) {
      string += genres[index]['NameEN	'];
    } else {
      string += ', ' + genres[index]['NameEN	'];
    }
  }
  return string;
}


const MovieList = (props) => {
  // List to be displayed to the user as movies belonging to the cinema
  let moviesBelongingToCinema = [];
  // List that keeps track of the titles that have been added to the moviesBelongingToCinema list
  let movieList = [];
  // List that has all the movies belonging to the cinema in duplicates
  // This is to be sent forward and displayed at another time since we need to be the screening tmes
  let addCinemaMovies = []
  for (x in props.movies) {
    for (y in props.movies[x].showtimes) {
      // Since movies belonging to a cinema can come in duplicates due to
      // Duplicate viewing we have to make sure we only get one title
      if(props.movies[x].showtimes[0].cinema.id === props.cinemaId ) {
        let newMovie = movieInformation(props.movies[x]);
        if(movieList.indexOf(newMovie.title) === -1) {
          movieList.push(newMovie.title);
          moviesBelongingToCinema.push(newMovie);
        }
        addCinemaMovies.push(props.movies[x])
      }
    }
  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Movies Available</Text>
      <FlatList
        numColumns={1}
        data={moviesBelongingToCinema}
        style={styles.flatList}
        renderItem={({
          item: {
            year, thumbnail, title, genres
          },
        }) => (
          <TouchableOpacity
            style={styles.movie}
            onPress={() => props.navigate('MovieDetails', { cinemaId: props.cinemaId, title, currentMoviesList: addCinemaMovies })}
          >
            <Image style={styles.image} source={{ uri: thumbnail }} />
            <View style={styles.details}>
              <Text style={styles.movieTitle}>
                {title}
              </Text>
              <Text style={styles.genres}>
                Genres:
                {' '}
                {getGenresString(genres)}
              </Text>
              <Text style={styles.genres}>
                Year of release:
                {' '}
                {year}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const mapStateToProps = (reduxStoreState) => {
  return {
    cinema: reduxStoreState.cinemas,
    movies: reduxStoreState.movies,
  }
};
export default connect(mapStateToProps)(MovieList);
