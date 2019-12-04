import React from 'react';
import NativeModal from 'react-native-modal';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, Image
} from 'react-native';
import styles from './styles';
import arrow from '../../resources/left-arroww.png';
import plus from '../../resources/add.png';
import Camera from '../Camera';


class ModifyContact extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: '',
    phone: '',
    image: '',
    nameLenIsValid: true,
    nameAvail: true,
    phoneLenIsValid: true,
    phoneIsDigit: true,
    nameLenIsValidRequired: '',
    nameAvailRequired: '',
    phoneLenIsValidRequired: '',
    phoneIsDigitRequired: '',
  }

  async updateName(name) {
    // Actually updating the name to the state
    this.setState({ name });
    // Name of board has to be at least 3 characters
    if (name.length > 2) {
      this.setState({ nameLenIsValid: true });
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({ nameLenIsValid: false });
    }
    // Check if the name exists in the system already
    console.log('Name', name);
    const status = await containsContact(name);
    console.log('avail', status);
    if (await containsContact(name) === -1) {
      this.setState({ nameAvail: true });
    } else {
      this.setState({ nameAvail: false });
    }
  }

  updatePhone(phone) {
    // Name of board has to be at least 3 characters
    if (phone.length > 6) {
      this.setState({ phoneLenIsValid: true });
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({ phoneLenIsValid: false });
    }
    const intPhone = (Number.parseInt(phone));
    if (Number.isInteger(intPhone)) {
      this.setState({ phoneIsDigit: true });
    } else {
      this.setState({ phoneIsDigit: false });
    }
    this.setState({ phone });
  }

  updateImage(image) {
    this.setState({ image });
  }

  determineErrorMsg() {
    const {
      nameLenIsValid, nameAvail, phoneLenIsValid,phoneIsDigit,
    } = this.state;
    if (nameLenIsValid === false) {
      this.setState({ nameLenIsValidRequired: '* Name must be more than two characters.' });
    } else {
      this.setState({ nameLenIsValidRequired: '' });
    }
    if (nameAvail === false) {
      this.setState({ nameAvailRequired: '* The name already exists.' });
    } else {
      this.setState({ nameAvailRequired: '' });
    }
    if (phoneLenIsValid === false) {
      this.setState({ phoneLenIsValidRequired: '* Phone number needs to have atleast 7 digits.' });
    } else {
      this.setState({ phoneLenIsValidRequired: '' });
    }
    if (phoneIsDigit === false) {
      this.setState({ phoneIsDigitRequired: '* Phone number needs to only be digits' });
    } else {
      this.setState({ phoneIsDigitRequired: '' });
    }
  }

  cleanUp(Submit) {
    const { closeModal, addContact } = this.props;
    // If Submit was pressed we add the board to our data
    if (Submit) {
      addContact(this.state);
    }
    // Clearing the error messages
    this.setState({
      name: '',
      phone: '',
      image: '',
      nameLenIsValid: true,
      nameAvail: true,
      phoneIsValid: true,
      nameLenIsValidRequired: '',
      nameAvailRequired: '',
      phoneRequired: '',
    });
    // GoBack was pressed - Closing the model after clearing the error message
    closeModal();
  }

  render() {
    const {
      isOpen, closeModal, addContact,
    } = this.props;
    const {
      name, phone, image, nameLenIsValid, nameAvail, phoneLenIsValid, phoneIsDigit, nameLenIsValidRequired, nameAvailRequired, phoneIsDigitRequired, phoneLenIsValidRequired,
    } = this.state;
    const isValid = nameLenIsValid && nameAvail && phoneLenIsValid && phoneIsDigit;
    
    return (
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        SwipeDirection={['up', 'down']}
        style={styles.modal}
      >
        <ScrollView
          style={styles.container}
        >
          <Text style={styles.title}>Modify Contact</Text>
          <Text style={{ color: 'red' }}>{nameLenIsValidRequired}</Text>
          <Text style={{ color: 'red' }}>{nameAvailRequired}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(text) => this.updateName(text)}
          />
          <Text style={{ color: 'red' }}>{phoneIsDigitRequired}</Text>
          <Text style={{ color: 'red' }}>{phoneLenIsValidRequired}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone number"
            placeholderTextColor="black"
            value={phone}
            onChangeText={(text) => this.updatePhone(text)}
          />
          <Text>Image:</Text>
          <Camera
            updateImage ={(image) => this.updateImage(image)} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { marginRight: 10 }]}
              onPress={isValid ? () => this.cleanUp(true) : () => this.determineErrorMsg()}
            >
              <Image source={plus} style={styles.arrow} />
              <Text style={styles.btntxt}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => this.cleanUp(false)}
            >
              <Image source={arrow} style={styles.arrow} />
              <Text style={styles.btntxt}>GO BACK</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }
}

export default ModifyContact;
