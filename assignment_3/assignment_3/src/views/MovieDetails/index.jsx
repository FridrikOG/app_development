/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ScrollView, Text, Image, TouchableOpacity, View, FlatList, Linking, ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import bg from '../../resources/images/moviebg.jpg';
import PropTypes from 'prop-types';

// Shows details about a single movie
// Should show all the viewing times for it
class MovieDetails extends React.Component {
  getGenresString(genres) {
    let string = '';
    for (index in genres) {
      if (index == 0) {
        string += genres[index]['NameEN	'];
      } else {
        string += `, ${genres[index]['NameEN	']}`;
      }
    }
    return string;
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { title, currentMoviesList } = params;
    // Current movie list has all the movies being shown at the cinema, we filter out
    // to only the selected title
    const array = currentMoviesList.filter((x) => x.title === title);
    // First index accessed since filter always returns an array
    const movieShowingArray = array[0];
    const { schedule } = movieShowingArray.showtimes[0];

    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={bg} resizeMode="repeat">
          <Image style={styles.image} source={{ uri: movieShowingArray.poster }} />
          <View style={styles.content}>
            <Text style={styles.movieTitle}>
              {title}
            </Text>
            <Text style={styles.purchase}>Purchase a ticket now!</Text>
            <FlatList
              numColumns={3}
              data={schedule}
              style={styles.flatList}
              renderItem={({
                item: {
                  purchase_url, time,
                },
              }) => (
                <TouchableOpacity style={styles.time} onPress={() => Linking.openURL(purchase_url).catch((err) => console.error('An error occurred', err))}>
                  <Text style={styles.timeText}>{time}</Text>
                </TouchableOpacity>
              )}
            />
            <Text style={styles.text}>
              <Text style={styles.bolding}>Plot:</Text>
              {' '}
              {movieShowingArray.plot}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bolding}>Duration:</Text>
              {' '}
              {movieShowingArray.durationMinutes}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bolding}>Year of release:</Text>
              {' '}
              {movieShowingArray.year}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bolding}>Genre:</Text>
              {' '}
              {this.getGenresString(movieShowingArray.genres)}
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
  movies: reduxStoreState.movies,
});

MovieDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    title: PropTypes.func.isRequired,
    currentMovieList: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,

  }).isRequired,
};

export default connect(mapStateToProps)(MovieDetails);
