import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView , Switch} from 'react-native';
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

  render() {
    const { isOpen, closeModal, addTask, listId} = this.props;
    const { name, description, finished } = this.state;
    value = null;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        SwipeDirection={['up','down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Creating a New list</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor = "black"
            style={styles.textInput}
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
          <Switch
            onValueChange={finished => this.updateFinished(finished)}
            value={this.state.finished}/>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={(info) => addTask(this.state)}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }

}

export default CreateTask;
