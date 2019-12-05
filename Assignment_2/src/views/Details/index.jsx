/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, TouchableOpacity, Image, ScrollView, ImageBackground,
} from 'react-native';
import styles from './styles';
import repair from '../../resources/repairing-service.png';
import bg from '../../resources/2407.jpg';
import deleteIcon from '../../resources/delete.png';
import ModifyContact from '../../components/Modal/ModifyContact';
import { deleteContact, createContact } from '../../services/contactService';

class Details extends React.Component {
  state = {
    openMCModal: false,
  };

  async delContact() {
    const {
      name, updateState,
    } = this.props.navigation.state.params;
    this.props.navigation.navigate('Contacts');
    await deleteContact(name);
    updateState();
  }

  // Function to update the details of the contact
  async updateDetails(contact) {
    let newName = contact.name;
    let newPhone = contact.phone;
    let newImage = contact.image;
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const {
      id, updateState, name, image, phone,
    } = params;
    console.log(id);
    // Sending in the old name
    if (newName === '') {
      newName = name;
    }
    // If user does not send a phone number
    if (newPhone === '') {
      newPhone = phone;
    }
    // If user does not change the image then we use the old one
    if (newImage === '') {
      newImage = image;
    }
    // The object containing the altered contact
    const alteredContact = {
      id,
      name: newName,
      phone: newPhone,
      image: newImage,
    };
    this.props.navigation.navigate('Contacts');
    // First we have to delete
    await deleteContact(name);
    // After we delete a contact we create a new one
    await createContact(alteredContact);

    updateState(contact);
  }

  render() {
    const { openMCModal } = this.state;
    const {
      name, image, phone,
    } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.details}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => this.delContact()}
          >
            <Image source={deleteIcon} style={styles.plus} />
            <Text style={styles.deleteText}>DELETE</Text>
          </TouchableOpacity>
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
          closeModal={() => this.setState({ openMCModal: false })}
          updateDetails={(contact) => this.updateDetails(contact)}
          oldName={name}
          oldImage={image}
          oldPhone={phone}
        />
      </ScrollView>
    );
  }
}
export default Details;
