/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import data from '../../resources/cinemas';
import MovieList from '../../components/MovieList/index';
import CinemaHandler from '../../components/Handler/cinemaHandler';
import { connect } from 'react-redux';

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
      <MovieList cinemaId = {cinemaId}/>
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

