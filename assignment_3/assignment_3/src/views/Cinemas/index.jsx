/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  View, Text, Image, TouchableOpacity, ImageBackground,
} from 'react-native';
// import data from '../../resources/data';
import { Dimensions } from 'react-native';

class Main extends React.Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVjZGMyNWQ2MDJkMDc3OTYyOTVhM2UiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkZyaWRyaWsgw5ZybiBHdW5uYXJzc29uIiwiZW1haWwiOiJmcmlkcmlrb2dAZ21haWwuY29tIiwidXNlcm5hbWUiOiJqb2hhbm4iLCJwYXNzd29yZCI6IiQyYSQwOCR4b2xlamNzdUxVMVVYTXVUZDZyRjlPTVdsam1Ed3ltRUVuRE9nM01lVnJrcUtLNENCQmpuTyIsImRvbWFpbiI6InJ1LmlzIiwibWVzc2FnZSI6IlNrw7NsYXZlcmtlZm5pIMOtIEhSIiwiaWF0IjoxNTc1ODA3MDg0LCJleHAiOjE1NzU4OTM0ODR9.olvJ1j6jgTO9v4S9xnNG5BhmjE3nntGUZ4rcvAFWFug'
    let kek = '{"name": "Dr. Wiley", "type": "Final boss",}'
    // let newVar = JSON.parse(kek)
    // console.log(newVar)
    
    

    axios.get('http://api.kvikmyndir.is/movies?token='+token)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    return (
      <View>
        
        <Text> Display text</Text>
      </View>
    );
  }
}

export default Main;
