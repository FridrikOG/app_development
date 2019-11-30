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
  }

  updateName(name) {
    this.setState({name});
    var maxId = 0;
    data.tasks.map(function(obj){
      if (obj.id > maxId) maxId = obj.id;
    });
    maxId += 1
    this.setState({maxId});
  }
  updateDescription(description) {
    this.setState({description});
  }
  updateFinished(finished) {
    this.setState({finished});
  }
  cleanUp(listId){
    console.log("cleaning up!");
    const { maxId, name, description, finished } = this.state;
    newTask = {
      "id": maxId,
      "name": name,
      "description": description,
      "finished": finished,
      "listId": listId
    }
    this.setState({
      maxId: '',
      name: '',
      description:'',
      finished: false,
      listId: '',
    })
    this.props.addTask(newTask);
  }
  render() {
    const { isOpen, closeModal, addTask, listId, lists} = this.props;
    const { name, description, finished } = this.state;
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
          <Text style={styles.title}>Creating a New Task</Text>
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
              onValueChange={finished => this.updateFinished(finished)}
              value={this.state.finished}/>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={() => this.cleanUp(listId)}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }
}
export default ModifyTask;
