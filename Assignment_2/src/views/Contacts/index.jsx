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

  searchContacts = (searchString) => {
    const {
      allContacts,
    } = this.state;
    console.log('Search string: ', searchString);
    // const oldBoard = boards.filter((x) => x.id === boardId[0]);
    const nameList = [];
    allContacts.map(
      (obj) => {
        nameList.push(obj.name);
      },
    );
    let foundNames = [];
    for (x in nameList) {
      const lowerContactName = nameList[x].toLowerCase();
      const lowerSearchString = searchString.toLowerCase();
      if (lowerContactName.search(lowerSearchString) !== -1) {
        console.log("match");
        foundNames.push(nameList[x]);
      }
    }
    console.log('Found : ', nameList);
    const searchedContacts = allContacts.filter((x) => x.name in foundNames);
    // console.log('Logging searched : ', searchedContacts);
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
