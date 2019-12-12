/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CinemaList from '../../components/CinemaList/index';


class Cinemas extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View>
        <CinemaList navigate={navigate} />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => ({
  cinemas: reduxStoreState.cinemas,
});


Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default connect(mapStateToProps)(Cinemas);
