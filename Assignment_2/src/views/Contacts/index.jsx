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
import * as ContactsOS from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import plus from '../../resources/plus.png';
import importIcon from '../../resources/importIcon.png';
import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CreateModal from '../../components/Modal';
import styles from './styles';
import {
  getAllContacts, createContact, containsContact, getContactsAsync, cleanDirectory,
} from '../../services/contactService';
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
    // cleanDirectory();
    // Getting all contacts so we can add the ones on the phoen to the state
    this.updateState();
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [ContactsOS.Fields.PhoneNumber],
      });

      if (data.length > 0) {
        const contact = data[0];
        console.log('IMPORTED CONTACTS: ', contact);
      }
    }
  }
  // This method Should filter the contact list everytime a new character is added to the search bar
  searchContacts = (searchString) => {
    const {
      alwaysAllContacts,
    } = this.state;

    if (searchString === '') {
      console.log('Resetting', alwaysAllContacts);
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
    console.log(foundNames);
    // Now we filter grabbing only names that are inside the foundNames array
    const searchedContacts = alwaysAllContacts.filter((x) => foundNames.includes(x.name));
    this.setState({ allContacts: searchedContacts });
  }


  // Gets the next id needed for a contact
  getMaxId(contacts) {
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
    console.log('Adding content: ', newContact);
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
    // TODO
    // 1. Supposed to just read from the contact directory from the device
    // and update the state
    console.log('Updating state to file directory');
    const { alwaysAllContacts } = this.state;
    const contacts = await getAllContacts();
    // console.log('contacts: ', contacts)
    const emptyList = [];
    for (x in contacts) {
      const aContact = JSON.parse(contacts[x]);
      emptyList.push(aContact);
    }
    this.setState({ alwaysAllContacts: emptyList, allContacts: emptyList });
  }

  async importContacts() {
    const { data } = await ContactsOS.getContactsAsync({
      fields: [ContactsOS.Fields.PhoneNumbers, ContactsOS.Fields.Image],
    });
    for (index in data) {
      if (data[index].phoneNumbers !== undefined) {
        console.log('THE PHONE NUMBER IS: ');
        // DO NOT LINT THIS, if linted the change to const will crash the loop
        pn = data[index].phoneNumbers[0].number;
      } else {
        pn = '';
      }
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
      await this.addContact(newContact);
    }
  }


  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { allContacts, openCCModal, alwaysAllContacts } = this.state;
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
export default Contacts;
