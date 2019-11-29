import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

class BoardModal extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnailPhoto:'',
    isValid: false,
    nameRequired: ''
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  }
  updateName(name){
    // Name of board has to be at least 3 characters
    if (name.length > 2){
      this.setState({isValid: true})
    // If name of board becomes less than 3 characters we make the form invalid for submission
    }
    else {
      this.setState({isValid: false})
    }
    // Actually updating the name to the state
    this.setState({name});
  }

  updateDescription(description){
    this.setState({description});
  }
  determineErrorMsg(){
    const {isValid} = this.state;
    if(isValid == false){
      this.setState({nameRequired: 'Name of the board must be more than two characters.'});
      }
    else{
      this.setState({nameRequired: ''});
    }
  }
  cleanUp(Submit){
    const {closeModal,addBoard} = this.props;
    // Clearing the error messages
    this.setState({
      name: '',
      description: '',
      thumbnailPhoto:'',
      isValid: false,
      nameRequired: ''
    })
    // If Submit was pressed we add the board to our data
    if(Submit){
      addBoard(this.state)
    }
    else{
    // GoBack was pressed - Closing the model after clearing the error message
    closeModal();
    }
    }

  render() {
    const { isOpen, closeModal} = this.props;
    const {isValid,nameRequired} = this.state;

    return(
    <NativeModal
      isVisible={isOpen}
      hasBackdrop
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      SwipeDirection={['up','down']}
      style={styles.modal}>
      <ScrollView style={[styles.container]}>
        <Text style={styles.title}>Creating a New Board</Text>
        <Text style={{color:'red'}}>{nameRequired}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor="black"
          value={this.state.name}
          onChangeText={ (text) => this.updateName(text)}/>
        <TextInput
          style={[styles.textInput, {height:200}]}
          placeholder="Description (optional)"
          placeholderTextColor="black"
          editable={true}
          multiline = {true}
          value={this.state.description}
          onChangeText={ text => this.updateDescription(text)}/>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={styles.button}
          onPress={isValid ? () => this.cleanUp(true): () => this.determineErrorMsg()}>
          <Text style={styles.btntxt}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.cleanUp(false)}>
            <Text style={styles.btntxt}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </NativeModal>
    );
  }
}

export default BoardModal;
