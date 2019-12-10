/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, ImageBackground,
} from 'react-native';
import bg from '../../resources/images/bg.png';
import logo from '../../resources/images/theatre.png';
import styles from './styles';
import axios from 'axios';
import CinemaHandler from '../../components/Handler/cinemaHandler';
import { connect } from 'react-redux';
import { updateCinema } from '../../actions/cinemaActions';

// import data from '../../resources/data';

class Main extends React.Component {

  state = {
    cinema: {},
  }

  async getCinemas(token) {
    const url = 'http://api.kvikmyndir.is/theaters'
    const header = { 'x-access-token ' : token }
    const test = await axios.get(url, {headers: {'x-access-token' : token}})
    console.log(test)
    return test;
  }

  async getAuthentication() {
    const promise = await axios.post('http://api.kvikmyndir.is/authenticate', { username: 'johann', password: 'johann123' });
    return promise.data.token;
  }

  async componentDidMount() {
    const { updateCinema } = this.props;
    const token = await this.getAuthentication();
    const cinemas = await this.getCinemas(token);
    updateCinema(cinemas.data);
    console.log("Loggign cinemas: ", cinemas)
  }

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

export default connect(null, { updateCinema })(Main); // returns a connected component

// <View style={styles.logoBorder}>
//
// </View>
