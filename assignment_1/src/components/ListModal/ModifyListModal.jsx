import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker';
import { Dropdown } from 'react-native-material-dropdown';


class ModifyListModal extends React.Component {
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
    const {nameIsValid, colorIsValid,boardIsValid} = this.state;
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

  cleanUp(Submit){
    const { closeModal,modifyList } = this.props;
    // Resetting vars
    this.setState({
      name: '',
      color: '',
      boardName:'',
      nameIsValid: false,
      colorIsValid: false,
      boardIsValid: false,
      nameRequired: '',
      colorRequired: '',
      boardRequired: '',
    })
    // If Submit was pressed we add the board to our data
    if(Submit){
      modifyList(this.state)
    }
    // GoBack was pressed - Closing the model after clearing the error message
    else{
      closeModal();
    }
    }


  render() {
    const {nameIsValid,colorIsValid,boardIsValid, nameRequired,colorRequired,boardRequired} = this.state;
    const { isOpen, closeModal, boardOptions} = this.props;
    value = null;

    console.log('This shit valid?????',nameIsValid&&colorIsValid&&boardIsValid);
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Modifying an existing list</Text>
          <Text style={{color:'red'}}>{nameRequired}</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor = "black"
            style={styles.textInput}
            value={this.state.name}
            onChangeText={ text => this.updateName(text)}/>
          <Text>Pick a color then press the middle to select!</Text>
          <Text style={{color:'red'}}>{colorRequired}</Text>
          <ColorPicker
            onColorSelected={color => this.updateColor(color)}
            style={{height:200,width:200}}/>
          <Text style={styles.colorText}>Selected color: {this.state.color}</Text>
          <Text style={styles.pickerText}>Pick a Board:</Text>
          <Text style={{color:'red'}}>{boardRequired}</Text>
          <Dropdown
            label='Boards'
            data={boardOptions}
            value={this.state.boardName}
            onChangeText={(value) => this.updateBoard(value)}/>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity 


            style={styles.button} 
            onPress={ (nameIsValid && colorIsValid && boardIsValid) ? () => this.cleanUp(true): () => this.determineErrorMsg()}>


              <Text style={styles.btntxt}> Submit </Text></TouchableOpacity>
            <TouchableOpacity 


            style={styles.button} 
            onPress={() => this.cleanUp(false)}>


              <Text style={styles.btntxt}> Go Back </Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }

}

export default ModifyListModal;
