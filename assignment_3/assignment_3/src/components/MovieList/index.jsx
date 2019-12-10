import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

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
  console.log('SENDING IN ',genres)
  let string = '';
  for(index in genres) {
    string += genres[index]['NameEN	'] + ',';
  }
  return string;
}
const MovieList = (props) => {
  let moviesBelongingToCinema = [];
  let movieList = [];
  for (x in props.movies) {
    for (y in props.movies[x].showtimes) {
      if(props.movies[x].showtimes[0].cinema.id === props.cinemaId ) {
        let newMovie = movieInformation(props.movies[x]);
        if(movieList.indexOf(newMovie.title) === -1) {
          movieList.push(newMovie.title);
          moviesBelongingToCinema.push(newMovie);
        }
      }
    }
  }
  // console.log("LOGGING MOVIES: ", moviesBelongingToCinema)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Welcome to the cinema of ID
        {props.cinemaId}
      </Text>
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
            onPress={() => props.navigate('MovieDetails', { cinemaId: props.cinemaId, title })}
          >
            <Image style={styles.image} source={{ uri: thumbnail }} />
            <View style={styles.details}>
              <Text>{title}</Text>
              <Text>{getGenresString(genres)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};
// onPress={() => props.navigate('MovieDetails', { cinemaId: props.cinemaId, movieId: id })}
const mapStateToProps = (reduxStoreState) => {
  return {
    cinema: reduxStoreState.cinema,
    movies: reduxStoreState.movies,
  }
};
export default connect(mapStateToProps)(MovieList);
