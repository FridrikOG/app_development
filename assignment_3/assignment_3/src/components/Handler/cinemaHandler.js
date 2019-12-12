import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateCinema } from '../../actions/cinemaActions';
import data from '../../resources/cinemas';


class CinemaHandler extends React.Component {
    state = {
      counter: 0,
      cinema: {},
    }

    render() {
      const { updateCinema } = this.props;
      const { counter } = this.state;
      return (
        null
      );
    }
}

export default connect(null, { updateCinema })(CinemaHandler); // returns a connected component
