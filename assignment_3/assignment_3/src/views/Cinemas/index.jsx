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
import { connect } from 'react-redux';


class Cinemas extends React.Component {

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    console.log("LOGIGNG CINEMAS: ", this.props.cinemas)

    return (
      <View>
        <CinemaList navigate={navigate} />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => {
return {
  cinemas: reduxStoreState.cinemas,
}
};


export default connect(mapStateToProps)(Cinemas);
