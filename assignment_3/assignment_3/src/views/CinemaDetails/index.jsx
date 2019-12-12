/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  ScrollView, Text, View,
} from 'react-native';
// import data from '../../resources/data';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/index';
import styles from './styles';

class CinemaDetails extends React.Component {
  render() {
    const cinemaId = this.props.navigation.state.params.cinemaId;
    const cinemas = this.props.cinemas;

    let cinema = ''
    for (x in cinemas) {
      if (cinemas[x].id === cinemaId){
        cinema = cinemas[x]
      }
    }
    console.log(cinema);
    return (
      <ScrollView>
        <View style={styles.cinemaInfo}>
          <Text style={styles.title}>Cinema Information:</Text>
          <Text style={styles.cinemaName}>
            Name:
            {' '}
            {cinema.name}
          </Text>
          <Text style={styles.cinemaDescription}>
            Description:
            {' '}
            {cinema.description}
          </Text>
          <Text style={styles.cinemaAddress}>
            Address:
            {' '}
            {cinema['address	']}
          </Text>
          <Text style={styles.cinemaCity}>
            City:
            {' '}
            {cinema.city}
          </Text>
          <Text style={styles.cinemaWebsite}>
            Website:
            {' '}
            {cinema.website}
          </Text>
          <Text style={styles.cinemaPhone}>
            Phone:
            {' '}
            {cinema.phone}
          </Text>
        </View>
        <MovieList cinemaId={cinemaId} navigate={this.props.navigation.navigate} />
      </ScrollView>
    );
  }
}
const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinemas,
  }
};

export default connect(mapStateToProps)(CinemaDetails);
