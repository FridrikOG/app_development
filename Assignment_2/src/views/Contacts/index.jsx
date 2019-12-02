/* eslint-disable react/state-in-constructor */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../../resources/data.json';
// import data from '../../resources/data';
// import AdministratorList from '../../components/AdministratorList';
import ContactList from '../../components/ContactList/ContactList';
import CreateContact from '../../components/CreateContact';
import styles from './styles';

class Contacts extends React.Component {
  // const props = this.props.navigation.state.params;
  state = {
    contacts: data.contacts,
    // isOpenCreateContactsModal
    isOpenCCModal: false,
  };


  // Called from the create task modal
  addContact = (info) => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts, info], isOpenCCModal: false });
  }

  render() {
    const {
      contacts,
      isOpenCCModal,
    } = this.state;
    console.log(contacts);
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ isOpenCCModal: true })}
        >
          <Text style={styles.button}>
          Create Contact
          </Text>
        </TouchableOpacity>
        <CreateContact
          isOpen={isOpenCCModal}
          closeModal={() => this.setState({ isOpenCCModal: false })}
          addContact={(info) => this.addContact(info)}
        />
        <ContactList boards={contacts} />
      </View>
    );
  }
}

export default Contacts;
