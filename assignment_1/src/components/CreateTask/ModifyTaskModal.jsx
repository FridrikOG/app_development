import React, { Component } from 'react';
import NativeModal from 'react-native-modal';
import {  ScrollView, View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker';
import { Dropdown } from 'react-native-material-dropdown';
import data from '../../resources/data.json';


class ModifyTask extends React.Component {
  state = {
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
    this.setState({description, hasRecievedDescriptionInput: false});
  }
  updateFinished(finished) {
    this.setState({finished});
  }

  determineErrorMsg(){
    const {nameIsValid, listIsValid } = this.state;
      if(nameIsValid == false){
      this.setState({nameRequired: 'Name must be more than two characters.'})
    }
    else{
      this.setState({nameRequired: ''})
    }
    if(listIsValid == false){
      this.setState({listRequired: 'The list for the task was not picked!'})
    }
    else{
      this.setState({listRequired: ''})
    }
  }
  cleanUp(Submit){
    console.log("cleaning up!");
    const {maxId, name, description, finished } = this.state;
    const {listId,closeModal} = this.props;

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
    if (Submit){
      this.props.addTask(newTask);
    }
    closeModal()
    
  }

  updateList(boardName) {
    this.setState({
      listName: boardName,
      listIsValid: true,
    });
  }


  getName() {
    const task = this.getTask();
    try {
      return task.name;
    } catch (err) {
      return '';
    }
  }
  getTask() {
    const { tasks, taskId } = this.props;
    const task = tasks.filter((x) => x.id === taskId);
    return task[0];
  }

  getDescription() {
    const task = this.getTask()
    try {
      return task.description
    } catch (err) {
      return ''
    }

  }

  render() {
    const { isOpen, closeModal, listOptions} = this.props;
    const { nameIsValid, nameRequired, listIsValid, listRequired, name, description, finished, hasRecievedNameInput,hasRecievedDescriptionInput } = this.state;
    console.log("is open value: ", isOpen);
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        SwipeDirection={[ "up", "down" ]}
        style={styles.modal}>
        <ScrollView style={styles.container}>
      <Text style={styles.title}>Modifying A Task</Text>
      <Text style={{ color: 'red' }}>{nameRequired}</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor = "black"
            style={[styles.textInput,{height: 50}]}
            value={hasRecievedNameInput ? this.getName() : this.state.name}
            onChangeText={ text => this.updateName(text)}/>
          <TextInput
            style={[styles.textInput, {height:200}]}
            placeholder="Description (optional)"
            placeholderTextColor="black"
            editable={true}
            multiline = {true}
            value={hasRecievedDescriptionInput ? this.getDescription() : this.state.description}
            onChangeText={ text => this.updateDescription(text)}/>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:15}}>Is the task finished?</Text>
            <Switch
              onValueChange={finished => this.updateFinished(finished)}
              value={this.state.finished}/>
          </View>
          <Text style={{ color: 'red' }}>{listRequired}</Text>
          <Dropdown
            label='Select a list...'
            data={listOptions} //send in list names to modifytaskmodal and then put that var here
            value={this.state.listName} //create a state that will contain the selected item of the list, declared as empty
            onChangeText={(value) => this.updateList(value)} //create a function to update the value of the state
          /> 
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity
              style={styles.button} 
              onPress={(nameIsValid&&listIsValid) ? () => this.cleanUp(true) : () => this.determineErrorMsg()}>
                <Text 
                style={styles.btntxt}
                >
                  Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.cleanUp(false)}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }
}
export default ModifyTask;
