import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

class BoardModal extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnailPhoto:''
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  updateName(name){
    this.setState({name});
  }
  updateDescription(description){
    this.setState({description});
  }
  render() {
    const { isOpen, closeModal, addBoard} = this.props;
    return(
    <NativeModal
      isVisible={isOpen}
      hasBackdrop
      onBackButtonPress={closeModal}
      onSwipeComplete={['up','down']}
      style={styles.modal}>
      <ScrollView style={[styles.container]}>
        <Text style={styles.title}>Creating a New Board</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={this.state.name}
          onChangeText={ text => this.updateName(text)}/>
        <TextInput
          style={styles.textInput}
          placeholder="Description (optional)"
          value={this.state.description}
          onChangeText={ text => this.updateDescription(text)}/>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.button} onPress={() => addBoard(this.state)}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </NativeModal>
    );
  }
}

export default BoardModal;
