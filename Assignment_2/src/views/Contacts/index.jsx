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
    console.log('Search string: ', searchString);
    
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
