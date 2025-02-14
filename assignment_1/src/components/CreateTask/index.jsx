import React, { Component } from 'react';
import NativeModal from 'react-native-modal';
import {  ScrollView, View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker';
import { Dropdown } from 'react-native-material-dropdown';
import data from '../../resources/data.json';


class CreateTask extends React.Component {
  state = {
    maxId: '',
    name: '',
    description:'',
    finished: false,
    nameIsValid: false,
    nameRequired: '',
    listId: '',
  }

  updateName(name) {
    // Name of board has to be at least 3 characters
    if (name.length > 2) {
      this.setState({ nameIsValid: true });
    // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({ nameIsValid: false });
    }
    var maxId = 0;
    data.tasks.map(function(obj){
      if (obj.id > maxId) maxId = obj.id;
    });
    maxId += 1
    this.setState({name,maxId, hasRecievedNameInput: false });
  }
  updateDescription(description) {
    this.setState({description});
  }
  updateFinished(finished) {
    this.setState({finished});
  }
  cleanUp(Submit){
    console.log("cleaning up!");
    const { maxId, name, description, finished, listName } = this.state;
    
    const { lists, addTask, closeModal, listId } = this.props;
    console.log("LIST ID IN CREATE TASK " ,listId);
    lists.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (list) {
        if (list.name === listName) {
          listId = list.id;
        }
      }
    )
    newTask = {
      "id": maxId,
      "name": name,
      "description": description,
      "finished": finished,
      "listId": listId,
    }
    this.setState({
      maxId: '',
      name: '',
      description:'',
      finished: false,
      listId: '',
      listName: '',
      nameIsValid: true,
      listIsValid: false,
      nameRequired: '',
      listRequired: '',
      hasRecievedNameInput: true,
      hasRecievedDescriptionInput: true,

    })
    // If Submit was pressed we add the board to our data
    if (Submit) {
      console.log("Submitted")
      this.props.addTask(newTask);
    } else {
    // GoBack was pressed - Closing the model after clearing the error message
      closeModal();
    }
  }


  determineErrorMsg(){
    console.log("in errormsg func")
    const {nameIsValid } = this.state;
    console.log(nameIsValid);
      if(nameIsValid == false){
      this.setState({nameRequired: 'Name must be more than two characters.'})
    }
    else{
      this.setState({nameRequired: ''})
    }
  }
  render() {
    const {isOpen, closeModal, addTask, listId} = this.props;
    const {nameRequired,nameIsValid, name, description, finished } = this.state;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        SwipeDirection={[ "up", "down" ]}
        style={styles.modal}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Creating a New Task</Text>
          <Text style={{ color: 'red' }}>{nameRequired}</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor = "black"
            style={[styles.textInput,{height: 50}]}
            value={this.state.name}
            onChangeText={ text => this.updateName(text)}/>
          <TextInput
            style={[styles.textInput, {height:200}]}
            placeholder="Description (optional)"
            placeholderTextColor="black"
            editable={true}
            multiline = {true}
            value={this.state.description}
            onChangeText={ text => this.updateDescription(text)}/>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:15}}>Is the task finished?</Text>
            <Switch
              onValueChange={value => this.updateFinished(value)}
              value={this.state.finished}/>
          </View>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
              style={styles.button} 
              onPress={(nameIsValid) ? () => this.cleanUp(true) : () => this.determineErrorMsg()}>
                <Text 
                style={styles.btntxt}
                >
                  Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }
}

export default CreateTask;
