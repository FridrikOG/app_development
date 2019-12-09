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
      // console.log(this.props)
      const { updateCinema } = this.props;
      // console.log("logging updateCinema: ", this.props)
      updateCinema(data);
      const { counter } = this.state;
      return (
        null
      );
    }
}

export default connect(null, { updateCinema })(CinemaHandler); // returns a connected component
