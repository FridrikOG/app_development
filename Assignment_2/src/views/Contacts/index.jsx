/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import data from '../../resources/data.json';

import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    allContacts: data.contacts,
    searchedContacts: [],
  };

  // This method Should filter the contact list everytime a new character is added to the search bar
  searchContacts = (searchString) => {
    // Getting all contacts
    const {
      allContacts,
    } = this.state;
    const nameList = [];
    // All map
    allContacts.map(
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
    const searchedContacts = allContacts.filter((x) => foundNames.includes(x.name));
    this.setState(searchedContacts);
  }

  render() {
    // const back = FileSystem.readAsStringAsync('file:///../../components/');
    // console.log(back);
    const {
      allContacts,
      searchedContacts,
    } = this.state;

    return (
      <View>
        <SearchBar searchContacts={(searchString) => this.searchContacts(searchString)} />
        <ContactList searchedContacts={allContacts} />
        <Text> le goooooo</Text>
      </View>
    );
  }
}

export default Contacts;
