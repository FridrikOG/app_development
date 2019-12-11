/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text, ScrollView, FlatList, Image, TouchableOpacity
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
    const { upMovies, videoOpen } = this.state;
    const moviesData = upMovies.data;

    return (
      <ScrollView style={styles.container}>
        {navigate}
        <UpcomingList />
      </ScrollView>
    );
  }
}
export default UpcomingMovies;
