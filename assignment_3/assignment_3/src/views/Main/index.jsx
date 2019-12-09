/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, ImageBackground,
} from 'react-native';
import bg from '../../resources/images/2407.jpg';
import logo from '../../resources/images/theatre.png';
import styles from './styles';
// import data from '../../resources/data';

class Main extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={bg} resizeMode="repeat">
          <Text style={styles.title}>SOFRITO</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigate('Cinemas')}>VIEW CINEMAS</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;

// <View style={styles.logoBorder}>
//
// </View>
