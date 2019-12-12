/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  ScrollView, Text, View,
} from 'react-native';
// import data from '../../resources/data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieList from '../../components/MovieList/index';
import styles from './styles';

class CinemaDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { cinemaId } = params;
    const { cinemas } = this.props;
    // filtering out the cinema with the cinemaId
    const filtered = cinemas.filter((element) => element.id === cinemaId);
    const cinema = filtered[0];
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
        <MovieList cinemaId={cinemaId} navigate={navigation.navigate} />
      </ScrollView>
    );
  }
}
const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
});

CinemaDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    title: PropTypes.func.isRequired,
    cinemas: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(CinemaDetails);
