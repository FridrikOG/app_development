import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';
const Main = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source = {logo} />
    <Text style={styles.paragraph} >Keep track of your tasks in the most efficient way!</Text>
    <TouchableHighlight style={styles.button} /*onPress ={ () => navigate('Gallery')}*/>
      <Text style={styles.buttonText} >View Boards</Text>
    </TouchableHighlight>
  </View>

);

export default Main;
