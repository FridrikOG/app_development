/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */
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
// import data from '../../resources/data.json';
import plus from '../../resources/plus.png';
import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CreateModal from '../../components/Modal';
import styles from './styles';
import { getAllContacts, createContact, containsContact } from '../../services/contactService';
import bg from '../../resources/2407.jpg';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    // This one is never changed
    alwaysAllContacts: [],
    allContacts: [],
    openCCModal: false,
    defaultImage: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
  };

  // This one runs after the render
  async componentDidMount() {
    // Getting all contacts so we can add the ones on the phoen to the state
    this.updateState();
  }

  // Gets the next id needed for a contact
  getMaxId(contacts) {
    let maxId = 0;
    // Loops through to grab the highest id since JSON objects arent in order
    contacts.map(
      (obj) => {
        if (obj.id > maxId) maxId = obj.id;
      },
    );
    // returns the max ID
    return maxId;
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
    this.setState({ allContacts: searchedContacts });
  }

  // Adds contact to the state and to the device directory
  async addContact(contact) {
    const { defaultImage, alwaysAllContacts } = this.state;
    // Checks for default image
    if (contact.image === '') {
      contact.image = defaultImage;
    }
    // new JSON object out of the infroamtion necessary
    const newContact = {
      id: this.getMaxId(alwaysAllContacts),
      name: contact.name,
      phone: contact.phone,
      image: contact.image,
    };
    // Calls the function that inserts the contact into the device directory
    await createContact(newContact);
    // Combines awlaysAllContacts with the newContact
    const newObject = [...alwaysAllContacts, newContact];
    // Updates the state with the new object
    this.setState({ alwaysAllContacts: newObject, allContacts: newObject });
  }

  async updateState() {
    // TODO
    // 1. Supposed to just read from the contact directory from the device
    // and update the state
    console.log('Updating state to file directory');
    const { alwaysAllContacts } = this.state;
    const contacts = await getAllContacts();
    const emptyList = [];
    for (x in contacts) {
      const aContact = JSON.parse(contacts[x]);
      emptyList.push(aContact);
    }
    this.setState({ alwaysAllContacts: emptyList, allContacts: emptyList });
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
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
              <ContactList contacts={allContacts} navigate={navigate} updateState={() => this.updateState()} />
            </View>
          </ImageBackground>
        </View>
        <CreateModal
          isOpen={openCCModal}
          closeModal={() => this.setState({ openCCModal: false })}
          addContact={(contact) => this.addContact(contact)}
        />
      </View>
    );
  }
}
export default Contacts;
