/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import data from '../../resources/cinemas';
import Header from '../../components/CinemaList/index';

import CinemaHandler from '../../components/Handler/cinemaHandler';


class Cinemas extends React.Component {

  async getCinemas(token) {
    return data;
  }

  async getAuthentication() {
    const promise = await axios.post('http://api.kvikmyndir.is/authenticate', { username: 'johann', password: 'johann123' });
    return promise.data.token;
  }

  async componentDidMount() {
    const token = await this.getAuthentication();
    const cinemas = await this.getCinemas(token);
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View>
        <CinemaHandler />
        <Header />
      </View>
    );
  }
}
// export default connect(null, { updateCinema, incrementCounter, decrementCounter })(Cinemas); // returns a connected component
export default Cinemas;
