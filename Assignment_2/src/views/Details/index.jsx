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
import ModifyContact from '../../components/Modal/ModifyContact';


class Details extends React.Component {
  state = {
    openMCModal: false,
  };
  // Function to update the details of the contact
  updateDetails = (contact) => {
  }

  render() {
    const { openMCModal } = this.state;
    const { name, image, phone } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.details}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Contact Details</Text>
          <TouchableOpacity
            style={styles.createBtn}
            onPress={() => this.setState({ openMCModal: true })}
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
        <ModifyContact
          isOpen={openMCModal}
          closeModal={() => this.setState({openMCModal: false})}
          updateDetails={(contact) => this.updateDetails(contact)}
          />
      </ScrollView>
    );
  }
}
export default Details;
