/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ImageBackground, TouchableOpacity, Image,
} from 'react-native';
import * as ContactsOS from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import plus from '../../resources/plus.png';
import importIcon from '../../resources/importIcon.png';
import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CreateModal from '../../components/Modal';
import styles from './styles';
import {
  getAllContacts, createContact,
} from '../../services/contactService';
import bg from '../../resources/2407.jpg';

class Contacts extends React.Component {
  state = {
    // This one is never changed
    alwaysAllContacts: [],
    allContacts: [],
    openCCModal: false,
    defaultImage: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
  };

  // This one runs after the render
  async componentDidMount() {
    // cleanDirectory();
    // Getting all contacts so we can add the ones on the phoen to the state
    this.updateState();
  }

  // Gets the next id needed for a contact
  getMaxId() {
    let maxId = 0;
    // Loops through to grab the highest id since JSON objects arent in order
    this.state.alwaysAllContacts.map(
      (obj) => {
        if (obj.id > maxId) maxId = obj.id;
      },
    );
    // returns the max ID
    return maxId + 1;
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
      id: this.getMaxId(),
      name: contact.name,
      phone: contact.phone,
      image: contact.image,
    };
    // Calls the function that inserts the contact into the device directory
    const canAdd = await createContact(newContact);
    // Combines awlaysAllContacts with the newContact
    if (canAdd) {
      const newObject = [...alwaysAllContacts, newContact];
      // Updates the state with the new object
      this.setState({ alwaysAllContacts: newObject, allContacts: newObject });
    }
  }

  async updateState() {
    const contacts = await getAllContacts();
    const emptyList = [];
    for (x in contacts) {
      const aContact = JSON.parse(contacts[x]);
      emptyList.push(aContact);
    }
    this.setState({ alwaysAllContacts: emptyList, allContacts: emptyList });
  }

  // This method Imports from the device OS
  async importContacts() {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    // It gets permession
    if (status === 'granted') {
      const { data } = await ContactsOS.getContactsAsync({
        fields: [ContactsOS.Fields.PhoneNumbers, ContactsOS.Fields.Image],
      });
      for (index in data) {
        // Check if there is a phone number associated
        if (data[index].phoneNumbers !== undefined) {
          pn = data[index].phoneNumbers[0].number;
        // If not phone number associated with contact then empty string
        } else {
          pn = '';
        }
        // Checks if the person has a picture
        // Create contact already populates the picture field with a default if empty
        // string so we send an empty one
        if (data[index].image !== undefined) {
          img = data[index].image.uri;
        } else {
          img = '';
        }
        const newContact = {
          name: data[index].name,
          phone: pn,
          image: img,
        };
        // Send this to the async that tries to add it
        await this.addContact(newContact);
      }
    }
  }


  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { allContacts, openCCModal } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.importBtn}
            onPress={() => this.importContacts()}
          >
            <Image source={importIcon} style={styles.plus} />
            <Text style={styles.importText}>Import contacts</Text>
          </TouchableOpacity>
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
              <ContactList
                contacts={allContacts}
                navigate={navigate}
                updateState={() => this.updateState()}
              />
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
Contacts.propTypes = {
  navigation: PropTypes.objectOf(PropTypes).isRequired,
};
export default Contacts;
