import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import pop from '../../resources/images/box-of-popcorn.png';
import bg from '../../resources/images/movie-film.png';


const MovieDetailList = (props) => {
    const {movieTitle, currentMoviesList} = props
    console.log("DSFSDIJFJFJ movie title ", movieTitle)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        
      </Text>
    </ScrollView>
  );
};


const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinemas,
    movies: reduxStoreState.movies,
  }
};
export default connect(mapStateToProps)(MovieDetailList);
