/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import * as FileSystem from 'expo-file-system';
import data from '../../resources/data.json';
import ContactList from '../../components/ContactList/ContactList';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './styles';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    // This one is never changed
    alwaysAllContacts : data.contacts,
    allContacts: data.contacts,
  };

  // This method Should filter the contact list everytime a new character is added to the search bar
  searchContacts = (searchString) => {
    console.log("Search string : ", searchString);
    const {
      allContacts, alwaysAllContacts
    } = this.state;

    if (searchString === '') {
      this.setState({ allContacts: data.contacts });
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

  render() {
    const { allContacts } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={{ uri: 'https://ph-files.imgix.net/651adc69-1ed9-47b3-8f6f-3a83ed0e2322?auto=format%2Ccompress%2Cenhance&dpr=2&crop=false&fit=max&w&h=500' }}>
          <View style={styles.container}>
            <SearchBar searchContacts={(searchString) => this.searchContacts(searchString)} />
            <ContactList contacts={allContacts} />
            <Text> le goooooo</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Contacts;
