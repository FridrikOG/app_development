import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const message = 'lol'
class ModifyBoardModal extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnailPhoto: '',
    isValid: true,
    hasRecievedNameInput: true,
    hasRecievedDescriptionInput: true,
    nameRequired: '',
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  }
  updateName(name) {
    // Name of board has to be at least 3 characters
    if (name.length > 2) {
      this.setState({
        isValid: true,
        hasRecievedNameInput: false,
      })
      // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({
        isValid: false
      })
    }
    this.setState({ name });
  }
  updateDescription(description) {
    const { hasRecievedDescriptionInput } = this.state;

    if (hasRecievedDescriptionInput){
        this.setState({hasRecievedDescriptionInput : false})
      }
    this.setState({ description });
  }

  getBoard() {
    const { boards,boardId } = this.props;
    let board = boards.filter(x => x.id == boardId);
    return board[0];
  }

  getName() {
    let board = this.getBoard()
    try {
      return board.name
    }
    catch(err){
      return 'error'
    }
  }
  getDescription() {
    let board = this.getBoard()
    try {
      return board.description
    }
    catch(err){
      return 'error'
    }
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
    const {modifyBoard, closeModal} = this.props;
    // Clean up error meassges
    // Resetting the states
    this.setState({
      hasRecievedNameInput: true,
      hasRecievedDescriptionInput: true
    })
    if(Submit){
      // If the submit button is pushed we modify the board
      modifyBoard(this.state);
    }
    else{
      closeModal();
    }
  }

  render() {
    const { isOpen, closeModal, boardId, boards, } = this.props;
    const { nameRequired, isValid, hasRecievedNameInput, hasRecievedDescriptionInput   } = this.state;
    let theBoard = boards.filter(x => x.id == boardId);
    let outBoardAr = theBoard[0];

    
    return (
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up', 'down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Modifying existing board</Text>
          <Text style={{color:'red'}}>{nameRequired}</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="black"

            value={hasRecievedNameInput ?  this.getName()  : this.state.name}

            onChangeText={(text) => this.updateName(text)} />
          <TextInput
            style={[styles.textInput, { height: 200 }]}
            placeholder="Description (optional)"
            placeholderTextColor="black"
            editable={true}
            multiline={true}

            value={hasRecievedDescriptionInput ? this.getDescription() : this.state.description}

            onChangeText={text => this.updateDescription(text)} />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={isValid ? () => this.cleanUp(true): () => this.determineErrorMsg()}>
              <Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.cleanUp(false)}><Text
                style={styles.btntxt}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  } 
}

export default ModifyBoardModal;
