import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';

import logo from '../../resources/logo.png';
import styles from './styles';
import data from '../../resources/data';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Administrators')}>
      <Text style={styles.buttonText}>Contact Administrators</Text>
    </TouchableHighlight>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>Toddler App</Text>
    <Text style={styles.paragraph}>A fun and efficient way to keep track of your tasks!</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Boards', { data })}>
      <Text style={styles.buttonText}>View Board List</Text>
    </TouchableHighlight>
  </View>
);

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
export default Main;
