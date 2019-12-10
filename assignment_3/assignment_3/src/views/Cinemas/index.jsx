/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import data from '../../resources/cinemas';
import CinemaList from '../../components/CinemaList/index';
import CinemaHandler from '../../components/Handler/cinemaHandler';


class Cinemas extends React.Component {

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View>
        <CinemaList />
      </View>
    );
  }
}
export default Cinemas;
