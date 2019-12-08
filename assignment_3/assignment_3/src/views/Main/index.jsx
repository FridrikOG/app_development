/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, ImageBackground,
} from 'react-native';
import bg from '../../resources/2407.jpg';
import logo from '../../resources/smartphone.png';
import styles from './styles';
// import data from '../../resources/data';

class Main extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={bg}>
          <View style={styles.logoBorder}>
            <Image style={styles.logo} source={logo} />
          </View>
          <Text style={styles.title}>Mr. Contact Johnson</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigate('Contacts')}>View Contact List</Text>
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
