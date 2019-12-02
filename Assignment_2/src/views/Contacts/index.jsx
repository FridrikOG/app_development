/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
// import Toolbar from '../../components/Toolbar';
// import data from '../../resources/data';
// import AdministratorList from '../../components/AdministratorList';
import ContactList from '../../components/ContactList/ContactList';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    contacts: data.contacts,
  };

  render() {
    const {
      contacts,
    } = this.state;
    console.log(contacts);
    return (
      <View>
        <ContactList boards={contacts} />
        <Text> le goooooo</Text>
      </View>
    );
  }
}

export default Contacts;
