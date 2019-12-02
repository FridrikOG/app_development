/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import data from '../../resources/data.json';
// import Toolbar from '../../components/Toolbar';
// import data from '../../resources/data';
// import AdministratorList from '../../components/AdministratorList';
import ContactList from '../../components/ContactList/ContactList';
import styles from './styles';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    contacts: data.contacts,
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={{ uri: 'https://ph-files.imgix.net/651adc69-1ed9-47b3-8f6f-3a83ed0e2322?auto=format%2Ccompress%2Cenhance&dpr=2&crop=false&fit=max&w&h=500'}}>
          <View style={styles.container}>
            <ContactList contacts={contacts} />
            <Text> le goooooo</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Contacts;
