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
    id: 0,
    name: '',
    phone: '',
    image: '',
    isValid: false,
  }

  updateName(name) {
    // Name of board has to be at least 3 characters
    if (name.length > 2) {
      this.setState({ isValid: true });
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({ isValid: false });
    }
    // Actually updating the name to the state
    this.setState({ name });
  }

  updatePhone(phone) {
    // Name of board has to be at least 3 characters
    if (phone.length > 2) {
      this.setState({ isValid: true });
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({ isValid: false });
    }
    // Actually updating the name to the state
    this.setState({ phone });
  }

  updateImage(image) {
    this.setState({ image });
  }

  cleanUp(Submit) {
    const { closeModal, updateDetails, } = this.props;
    // If Submit was pressed we add the board to our data
    if (Submit) {
      updateDetails(this.state);
    }
    // Clearing the error messages
    this.setState({
      id: 0,
      name: '',
      phone: '',
      image: '',
    });
    // GoBack was pressed - Closing the model after clearing the error message
    closeModal();
  }

  render() {
    const { isOpen, closeModal, updateDetails } = this.props;
    const { name, phone, image, id } = this.state;
    
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
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(text) => this.updateName(text)}
          />
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
              onPress={() => this.cleanUp(true)}
            >
              <Image source={plus} style={styles.arrow} />
              <Text style={styles.btntxt}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
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
