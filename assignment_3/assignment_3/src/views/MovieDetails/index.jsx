/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ScrollView, Text,
} from 'react-native';
import { connect } from 'react-redux';

class MovieDetails extends React.Component {
  render() {
    const {title, cinemaId} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Text>
          MovieName:
          {title}
          CinemaId:
          {cinemaId}
        </Text>
      </ScrollView>
    );
  }
}
const mapStateToProps = (reduxStoreState) => {
  return {
    cinemas: reduxStoreState.cinemas,
  }
};


export default connect(mapStateToProps)(MovieDetails);
