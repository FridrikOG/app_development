/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
} from 'react-native';
// import data from '../../resources/data';
import Upcoming from '../../components/UpcomingList';


class UpcomingMovies extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <ScrollView style={{ alignSelf: 'center' }}>
        {navigate}
        <Upcoming />
      </ScrollView>
    );
  }
}
export default UpcomingMovies;


UpcomingMovies.propTypes = {
  navigate: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired,

};
