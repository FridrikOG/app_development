/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View,
} from 'react-native';
import CinemaList from '../../components/CinemaList/index';
import { connect } from 'react-redux';


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

const mapStateToProps = (reduxStoreState) => {
return {
  cinemas: reduxStoreState.cinemas,
}
};


export default connect(mapStateToProps)(Cinemas);
