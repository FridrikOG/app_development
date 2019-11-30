import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';

const message = 'lol'
class ModifyTask extends React.Component {
  state = {
    listID: '',
    listOption: '',
    name: '',
    description:'',
    finished: false,
    listId: '',
  }
  updateTask(listOption){
    this.setState({listOptions});
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
    const { isOpen, closeModal, listNames, taskName} = this.props;

    // let theBoard = boards.filter(x => x.id == boardId);
    // let outBoardAr = theBoard[0];


    return (
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up', 'down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Modify task</Text>
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
          <Dropdown
            label='Move to list...'
            data={listNames}
            value={this.state.listOption}
            onChangeText={(value) => this.updateTask(value)}/>
        </ScrollView>
      </NativeModal>
    );
  }
}

export default ModifyTask;
