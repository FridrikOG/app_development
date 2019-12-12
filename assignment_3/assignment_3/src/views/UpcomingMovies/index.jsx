/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text, ScrollView, FlatList, Image, TouchableOpacity
} from 'react-native';
// import data from '../../resources/data';
import { Dimensions } from 'react-native';
import UpcomingList from '../../components/UpcomingList';


class UpcomingMovies extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <ScrollView style={{ alignSelf: 'center' }}>
        {navigate}
        <UpcomingList />
      </ScrollView>
    );
  }
}
export default UpcomingMovies;
