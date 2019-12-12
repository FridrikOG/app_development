/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
 ScrollView,
} from 'react-native';
// import data from '../../resources/data';
import { Dimensions } from 'react-native';
import styles from './styles';
import UpcomingList from '../../components/UpcomingList';


class UpcomingMovies extends React.Component {
  state ={
    upMovies: [],
    videoOpen: false,
  };
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <ScrollView style={styles.container}>
        {navigate}
        <UpcomingList />
      </ScrollView>
    );
  }
}
export default UpcomingMovies;
