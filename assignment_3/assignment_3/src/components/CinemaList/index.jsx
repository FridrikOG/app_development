import React from 'react';
import {
  Text, ScrollView, FlatList, TouchableOpacity, ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import bg from '../../resources/images/movie-film.png';


const CinemaList = (props) => {
  const { cinemas } = props;
  const { navigate } = props;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Cinema Screen
      </Text>
      <TouchableOpacity style={styles.upcomingBtn} onPress={() => navigate('UpcomingMovies')}>
        <Text style={styles.upcomingText}>View Upcoming movies</Text>
      </TouchableOpacity>
      <FlatList
        numColumns={2}
        // We have to display this by alphabetical order
        data={cinemas.sort((a, b) => a.name.localeCompare(b.name))}
        style={styles.flatList}
        renderItem={({
          item: {
            id, name, website,
          },
        }) => (
          <TouchableOpacity style={styles.cinema} onPress={() => navigate('CinemaDetails', { cinemaId: id })}>
            <ImageBackground style={styles.backgroundImage} source={bg}>
              <Text style={styles.cinemaName}>
                {name}
              </Text>
              <Text style={styles.cinemaWebsite}>{website}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

// Gets the information from the redux state
const mapStateToProps = (reduxStoreState) => {
  console.log('variable ', reduxStoreState.upcomingMovies);
  return {
    cinemas: reduxStoreState.cinemas,
    movies: reduxStoreState.movies,
  };
};

CinemaList.propTypes = {
  navigate: PropTypes.func.isRequired,
  cinemas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CinemaList);
