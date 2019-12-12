/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';


// Putting information about a specific movie in an easy to understand object
const movieInformation = (movie) => {
  const newMovieInfo = {
    thumbnail: movie.poster,
    title: movie.title,
    year: movie.year,
    genres: movie.genres,
  };
  return newMovieInfo;
};
// This function is meant to solve a probem with the API
// Where the string has gaps
const getGenresString = (genres) => {
  let string = '';
  genres.map(
    // eslint-disable-next-line prefer-arrow-callback
    function (genre, index) {
      if (index === 0) {
        string += genre['NameEN	'];
      } else {
        // This is to fix a problem caused by the API
        string += `, ${genre['NameEN	']}`;
      }
    },
  );
  return string;
};


const MovieList = (props) => {
  const { navigate, cinemaId, movies } = props;
  // List to be displayed to the user as movies belonging to the cinema
  const moviesBelongingToCinema = [];
  // List that keeps track of the titles that have been added to the moviesBelongingToCinema list
  const movieList = [];
  // List that has all the movies belonging to the cinema in duplicates
  // This is to be sent forward and displayed at another time since we need to be the screening tmes
  const addCinemaMovies = [];
  movies.map(
    (item) => {
      if (item.showtimes[0].cinema.id === cinemaId) {
        const newMovie = movieInformation(item);
        // If the movie is not already in the list then we add it
        if (movieList.indexOf(newMovie.title) === -1) {
          // Keeping track of added titles
          movieList.push(newMovie.title);
          // Movies that will be displayed
          moviesBelongingToCinema.push(newMovie);
        }
        // All the movies belonging to the cinema
        addCinemaMovies.push(item);
      }
    },
  );


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Movies Available</Text>
      <FlatList
        numColumns={1}
        data={moviesBelongingToCinema}
        style={styles.flatList}
        renderItem={({
          item: {
            year, thumbnail, title, genres,
          },
        }) => (
          <TouchableOpacity
            style={styles.movie}
            onPress={() => navigate('MovieDetails', { cinemaId: props.cinemaId, title, currentMoviesList: addCinemaMovies })}
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

const mapStateToProps = (reduxStoreState) => ({
  cinema: reduxStoreState.cinemas,
  movies: reduxStoreState.movies,
});

MovieList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    title: PropTypes.func.isRequired,
    cinemas: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(MovieList);
