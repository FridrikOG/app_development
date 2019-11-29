import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker';
import { Dropdown } from 'react-native-material-dropdown';


class ListModal extends React.Component {
  state = {
    name: '',
    color: '',
    boardName:'',
    nameIsValid: false,
    colorIsValid: false,
    boardIsValid: false,
    nameRequired: '',
    colorRequired: '',
    boardRequired: '',
  }

  handleSubmit = () => {
    console.log(this.state);
  }
  updateName(name) {
    console.log("Logging the name: ", name)
    //name = 'Name needs to be longer!'
    const {isInvalid} = this.state
    // Name of board has to be at least 3 characters
    if (name.length > 2){
      this.setState({
        nameIsValid:true
      })
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {this.setState({
      nameIsValid:false
    })
  }
    this.setState({name});
  }
  updateColor(color) {
    this.setState({
      color: color,
      colorIsValid: true,
    });
  }
  updateBoard(boardName) {
    this.setState({
      boardName: boardName,
      boardIsValid: true,
    });
  }
  determineErrorMsg(){
    const {nameIsValid, colorIsValid,boardIsValid,nameRequired} = this.state;
    if(nameIsValid == false){
      this.setState({nameRequired: 'Name must be more than two characters.'})
    }
    else{
      this.setState({nameRequired: ''})
    }
    if(colorIsValid == false){
      this.setState({colorRequired: 'The color of the list was not picked!'}) 
    }
    else{
      this.setState({colorRequired: ''})
    }
    if(boardIsValid == false){
      this.setState({boardRequired: 'The board for the list was not picked!'})
    }
    else{
      this.setState({boardRequired: ''})
    }
  }
  cleanUp(closeModal){
    // Clearing the error messages
    this.setState({
      nameRequired: '',
      colorRequired: '',
      boardRequired: '',
    })
    // Closing the model after clearing the error message
    closeModal();
    }
  render() {
    const { isOpen, closeModal, addList, boardOptions} = this.props;
    const {nameIsValid,colorIsValid,boardIsValid, nameRequired,colorRequired,boardRequired} = this.state;
    const isValid = nameIsValid && colorIsValid && boardIsValid;

    value = null;

    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Creating a New list</Text>
          <Text style={{color:'red'}}>{nameRequired}</Text>
          <TextInput
            placeholder="Enter name of list"
            placeholderTextColor = "grey"
            style={styles.textInput}
            value={this.state.name}
            onChangeText={ text => this.updateName(text)}/>
          <Text style={{color:'red'}}>{colorRequired}</Text>
          <Text>Pick a color then press the middle to select!</Text>
          <ColorPicker
            onColorSelected={color => this.updateColor(color)}
            style={{height:200,width:200}}/>
          <Text style={styles.colorText}>Selected color: {this.state.color}</Text>
          <Text style={styles.pickerText}>Pick a Board:</Text>
          <Text style={{color:'red'}}>{boardRequired}</Text>
          <Dropdown
            label='Select Boards'
            data={boardOptions}
            value={this.state.boardName}
            onChangeText={(value) => this.updateBoard(value)}/>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
            onPress={isValid ? () => addList(this.state): () => this.determineErrorMsg()}
            style={styles.button}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => this.cleanUp(closeModal)}>
              <Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }

}

export default ListModal;
