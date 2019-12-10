/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  ScrollView,
} from 'react-native';
// import data from '../../resources/data';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/index';

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
    return (
      <View>
        <Text> {cinema.id} {cinema.name} {cinema.website} {cinema.phone} {cinema.address} {cinema.city} {cinema.description} </Text>
      <MovieList cinemaId={cinemaId} navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}
const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinemas,
  }
};

export default connect(mapStateToProps)(CinemaDetails);
