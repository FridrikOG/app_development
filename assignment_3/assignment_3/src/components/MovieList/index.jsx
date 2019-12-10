import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { updateCurrentCinemaMovies } from '../../actions/currentCinemaMoviesAction';

const movieInformation = (movie) => {
  const newMovieInfo = {
    thumbnail: movie.poster,
    title: movie.title,
    Released: movie.omdb[0].Released,
    genres: movie.genres
  }
  return newMovieInfo;
};

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
  
  state = {
    currentCinemaMovies: {}
  }

  let moviesBelongingToCinema = [];
  let movieList = [];
  let addCinemaMovies = []
  for (x in props.movies) {
    for (y in props.movies[x].showtimes) {
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
  //const { updateCurrentCinemaMovies } = props;
  // updateCurrentCinemaMovies(addCinemaMovies);
  // console.log("LOGGING MOVIES: ", moviesBelongingToCinema)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Movies Available</Text>
      <FlatList
        numColumns={1}
        data={moviesBelongingToCinema}
        style={styles.flatList}
        renderItem={({
          item: {
            released, thumbnail, title, genres
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
export default connect(mapStateToProps, updateCurrentCinemaMovies)(MovieList);
