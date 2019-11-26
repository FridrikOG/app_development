import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import logo from '../../resources/logo.png';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>Toddler App</Text>
    <Text style={styles.paragraph}>A fun and efficient way to keep track of your tasks!</Text>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>Gallery</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
