/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { cloneElement } from 'react';
import {
  View, Text, ImageBackground, TouchableOpacity, Image,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import data from '../../resources/data.json';
import plus from '../../resources/plus.png';
import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CreateModal from '../../components/Modal';
import styles from './styles';
import { getAllContacts, createContact } from '../../services/contactService';
import bg from '../../resources/2407.jpg';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    // This one is never changed
    alwaysAllContacts: [],
    allContacts: [],
    openCCModal: false,
  };


  // This one runs after the render
  async componentDidMount() {
    // Getting all contacts so we can add the ones on the phoen to the state
    const { alwaysAllContacts } = this.state;
    const contacts = await getAllContacts();
    for (x in contacts) {
      let aContact = JSON.parse(contacts[x]);
      console.log("loggin a cont " , aContact);
      alwaysAllContacts.push(aContact);
    }
    this.setState({ alwaysAllContacts: alwaysAllContacts, allContacts: alwaysAllContacts });
  }

  addContanct = (contact) => {
    console.log('Adding contact: ', contact);
  }

  // This method Should filter the contact list everytime a new character is added to the search bar
  searchContacts = (searchString) => {
    const {
      alwaysAllContacts,
    } = this.state;

    if (searchString === '') {
      this.setState({ allContacts: alwaysAllContacts });
      return;
    }
    // Getting all contacts
    const nameList = [];
    // All map
    alwaysAllContacts.map(
      (obj) => {
        nameList.push(obj.name);
      },
    );
    // New array that will be populated will all the names that match the searchString
    const foundNames = [];
    for (x in nameList) {
      // Making contact name lower case for comparison
      const lowerContactName = nameList[x].toLowerCase();
      // Making search string lower case for comparison
      const lowerSearchString = searchString.toLowerCase();
      // if it finds matching substrings it adds it to the foundNames array
      if (lowerContactName.search(lowerSearchString) !== -1) {
        foundNames.push(nameList[x]);
      }
    }
    // Now we filter grabbing only names that are inside the foundNames array
    const searchedContacts = alwaysAllContacts.filter((x) => foundNames.includes(x.name));

    const newVar = FileSystem.readAsStringAsync(imageDirectory);
    // console.log('reading out from newVar LOL : ', newVar);
    this.setState({ allContacts: searchedContacts });
  }


  render() {
    const { navigate } = this.props.navigation;
    const { allContacts, openCCModal, alwaysAllContacts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Contacts</Text>
          <TouchableOpacity
            style={styles.createBtn}
            onPress={() => this.setState({ openCCModal: true })}
          >
            <Image source={plus} style={styles.plus} />
            <Text style={styles.createText}>CREATE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ImageBackground style={styles.backgroundImage} source={bg}>
            <View>
              <SearchBar searchContacts={(searchString) => this.searchContacts(searchString)} />
              <ContactList contacts={allContacts} navigate={navigate} />
            </View>
          </ImageBackground>
        </View>
        <CreateModal
          isOpen={openCCModal}
          closeModal={() => this.setState({ openCCModal: false })}
          addContanct={(contact) => this.addContanct(contact)}
        />
      </View>
    );
  }
}

export default Contacts;
