/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
// import Toolbar from '../../components/Toolbar';
// import data from '../../resources/data';
// import AdministratorList from '../../components/AdministratorList';


class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    contacts: data.contacts,
  };


  render() {
    return (
      <View>
        <Text> le goooooo</Text>
      </View>
    );
  }
}

export default Contacts;
