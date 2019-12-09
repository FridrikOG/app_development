/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import { Dimensions } from 'react-native';




class Cinemas extends React.Component {

  async getCinema(token){
    let response = await  axios.get('http://api.kvikmyndir.is/theaters?token='+token)
    return response
  }

  async getAuthentication(){
    const promise = await axios.post('http://api.kvikmyndir.is/authenticate', {username : 'johann', password : 'johann123'})
    return promise.data.token;
  }

  async componentDidMount() {
    const token = await this.getAuthentication()
    const cinemas = await this.getCinema(token)
    console.log("Cinemas: ", cinemas );
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View>
        <Text> Display text</Text>
      </View>
    );
  }
}

export default Cinemas;
