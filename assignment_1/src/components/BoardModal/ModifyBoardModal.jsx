import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

class ModifyBoardModal extends React.Component {
  state = {
    name: '',
    description: '',
    thumbnailPhoto:'',
    isInvalid: true
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  }
  updateName(name){
    //name = 'Name needs to be longer!'
    const {isInvalid} = this.state
    // Name of board has to be at least 3 characters
    if (name.length > 2){
      this.setState({
        isInvalid:false,
      })
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {this.setState({
      isInvalid:true
    })
  }
    this.setState({name});
  }
  updateDescription(description){
    this.setState({description});
  }


  render() {
    const { isOpen, closeModal, modifyBoard, boardId, boards} = this.props;
    const { isInvalid} = this.state;
    let theBoard = boards.filter(x => x.id == boardId);
    let outBoardAr = theBoard[0];
    console.log("Logging the board", theBoard);
    
    // this.setState({name: 'something'});
   /* if (outBoardAr !== undefined){
        console.log("Logging the name inside the IF statement", outBoardAr.name);
        
        //this.updateName(outBoardAr.name)
        // this.setState({name:outBoardAr.name})
    }
    */ 
    

    //console.log("Printing selIds : ", boardId)
    return(
    <NativeModal
      isVisible={isOpen}
      hasBackdrop
      onBackButtonPress={closeModal}
      onSwipeComplete={['up','down']}
      style={styles.modal}>
      <ScrollView style={[styles.container]}>
        <Text style={styles.title}>Modifying existing board</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Insert Name"
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
          disabled = {isInvalid} 
          style={[styles.button, {opacity: isInvalid ? 0.5 : 1 }]} 
          onPress={() => modifyBoard(this.state)}><Text 
          style={styles.btntxt}>Submit</Text></TouchableOpacity>
          <TouchableOpacity 
          style={styles.button} 
          onPress={closeModal}><Text 
          style={styles.btntxt}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </NativeModal>
    );
  }
}

export default ModifyBoardModal;
