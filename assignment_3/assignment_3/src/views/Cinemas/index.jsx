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

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View>
        <Header />
      </View>
    );
  }
}
// export default connect(null, { updateCinema, incrementCounter, decrementCounter })(Cinemas); // returns a connected component
export default Cinemas;
