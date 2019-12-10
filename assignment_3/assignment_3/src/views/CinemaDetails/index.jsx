/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import data from '../../resources/cinemas';

import CinemaHandler from '../../components/Handler/cinemaHandler';


class CinemaDetails extends React.Component {
  render() {
    const cinemaId = this.props.navigation.state.params.cinemaId;
    return (
      <View>
        <Text>
          this is id:
          {cinemaId}
        </Text>
      </View>
    );
  }
}
// export default connect(null, { updateCinema, incrementCounter, decrementCounter })(Cinemas); // returns a connected component
export default CinemaDetails;
