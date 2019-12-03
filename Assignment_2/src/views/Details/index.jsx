/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView, ImageBackground
} from 'react-native';
// import * as FileSystem from 'expo-file-system';
// import data from '../../resources/data.json';
import styles from './styles';
import repair from '../../resources/repairing-service.png';
import bg from '../../resources/2407.jpg';

class Contacts extends React.Component {
  render() {
    const { name, image, phone } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.details}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Contact Details</Text>
          <TouchableOpacity
            style={styles.createBtn}
          >
            <Image source={repair} style={styles.plus} />
            <Text style={styles.createText}>EDIT</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground style={styles.backgroundImage} source={bg}>
          <View style={styles.content}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>Phone Number</Text>
            <Text style={styles.phoneValue}>{phone}</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
export default Contacts;
