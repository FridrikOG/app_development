/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ScrollView, Text, Image, Flatlist
} from 'react-native';
import { connect } from 'react-redux';
import MovieDetailList from '../../components/MovieDetailList/index';



class MovieDetails extends React.Component {

  getGenresString = (genres) => {
    let string = '';
    for(index in genres) {
      string += genres[index]['NameEN	'] + ',';
    }
    return string;
  }
  render() {
    const {title, cinemaId, currentMoviesList} = this.props.navigation.state.params;
    // Current movie list has all the movies being shown at the cinema, we filter out to only the selected title
    const array = currentMoviesList.filter(x => x.title === title);
    // First index accessed since filter always returns an array
    const movieShowingArray = array[0]
    const schedule = movieShowingArray.showtimes
    let theCinema = ''

    console.log("OVER HERE : ", movieShowingArray, schedule)

    return (
      <ScrollView>
        <Text>
          MovieName: {title}
          plot: {movieShowingArray.plot}
          Duration: {movieShowingArray.durationMinutes}
          Year of release: {movieShowingArray.omdb[0].Released}
        </Text>
          <Image source={{ uri: movieShowingArray.poster }} />
        
      </ScrollView>
    );
  }
}
const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinemas,
    movies: reduxStoreState.movies,
  }
};


export default connect(mapStateToProps)(MovieDetails);
