/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text,
} from 'react-native';
// import data from '../../resources/data';
import { Dimensions } from 'react-native';




class UpcomingMovies extends React.Component {

  async getCinema(token){
    let response = await  axios.get('http://api.kvikmyndir.is/upcoming?token='+token)
    return response
  }

  async getAuthentication(){
    const promise = await axios.post('http://api.kvikmyndir.is/authenticate', {username : 'johann', password : 'johann123'})
    return promise.data.token;
  }

  async componentDidMount() {
    const token =  await this.getAuthentication()
    // console.log("Returned token: ", token)
    //console.log(newToken)
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVjZGMyNWQ2MDJkMDc3OTYyOTVhM2UiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkZyaWRyaWsgw5ZybiBHdW5uYXJzc29uIiwiZW1haWwiOiJmcmlkcmlrb2dAZ21haWwuY29tIiwidXNlcm5hbWUiOiJqb2hhbm4iLCJwYXNzd29yZCI6IiQyYSQwOCR4b2xlamNzdUxVMVVYTXVUZDZyRjlPTVdsam1Ed3ltRUVuRE9nM01lVnJrcUtLNENCQmpuTyIsImRvbWFpbiI6InJ1LmlzIiwibWVzc2FnZSI6IlNrw7NsYXZlcmtlZm5pIMOtIEhSIiwiaWF0IjoxNTc1ODA3MDg0LCJleHAiOjE1NzU4OTM0ODR9.olvJ1j6jgTO9v4S9xnNG5BhmjE3nntGUZ4rcvAFWFug';
    const upcomingMovies = await this.getCinema(token)
    console.log("Logging upcoming movies: ", upcomingMovies);
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

export default UpcomingMovies;
