import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

class BoardModal extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnailPhoto:'',
    isInvalid: false
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  }
  updateName(name){
    console.log("Logging the name: ", name)
    //name = 'Name needs to be longer!'
    const {isInvalid} = this.state
    // Name of board has to be at least 3 characters
    if (name.length > 2){
      this.setState({
        isInvalid:true,
      })
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {this.setState({
      isInvalid:false
    })
  }
    this.setState({name});
  }
  updateDescription(description){
    this.setState({description});
  }

  render() {
    const { isOpen, closeModal, addBoard} = this.props;
    const {isInvalid} = this.state;
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
          disabled = {!isInvalid} 
          style={[styles.button, {opacity: isInvalid ? 1 : 0.5 }]} 
          onPress={() => addBoard(this.state)}><Text 
          style={styles.btntxt}>Submit</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </NativeModal>
    );
  }
}

export default BoardModal;
