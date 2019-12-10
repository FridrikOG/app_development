import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import pop from '../../resources/images/box-of-popcorn.png';
import bg from '../../resources/images/movie-film.png';

const movieInformation = (movie) => {
    newMovieInfo = {
        thumbnail : movie.poster,
        title : movie.title,
        Released: movie.omdb[0].Released,
        genres: movie.genres
    }
    return newMovieInfo;
}



const MovieList = (props) => {
  let moviesBelongingToCinema = []
  let movieList = []
  for (x in props.movies){
      for (y in props.movies[x].showtimes){
          if (props.movies[x].showtimes[0].cinema.id === props.cinemaId ){
              let newMovie = movieInformation(props.movies[x])
              if (movieList.indexOf(newMovie.title) === -1){
                movieList.push(newMovie.title)
                moviesBelongingToCinema.push(newMovie)
              }
          }
      } 
  }


  // console.log("LOGGING MOVIES: ", moviesBelongingToCinema)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Welcome to the cinema of ID {props.cinemaId}
      </Text>
      <FlatList
        numColumns={2}
        data={moviesBelongingToCinema }
        style={styles.flatList}
        renderItem={({
          item: {
            released, thumbnail, title, genres
          },
        }) => (
          <TouchableOpacity style={styles.cinema} onPress={() => props.navigate('CinemaDetails', { cinemaId: id })}>
            <ImageBackground style={styles.backgroundImage} source={thumbnail}>
              <Text style={styles.cinemaName}>
                {released}
              </Text>
              <Text style={styles.cinemaWebsite}>{title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};
// onPress={() => props.navigate('CinemaDetails', { cinemaId: id })}

const mapStateToProps = (reduxStoreState) => {
    // console.log("LOGGING MOVIES : ", reduxStoreState)
    // console.log("Logging movie: ", reduxStoreState.movies[0].showtimes[0].cinema.id)
    
    //console.log("All the movies belongign to the cinema :" ,moviesBelongingToCinema)
    

  return {
    cinema: reduxStoreState.cinema,
    movies: reduxStoreState.movies,
  }
};
export default connect(mapStateToProps)(MovieList);
