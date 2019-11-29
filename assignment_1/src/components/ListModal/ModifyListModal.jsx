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
  }
  handleSubmit = () => {
    console.log(this.state);
  }
  updateName(name) {
    this.setState({name});
  }
  updateColor(color) {
    this.setState({color});
  }
  updateBoard(boardName) {
    this.setState({boardName});
  }
  render() {
    const { isOpen, closeModal, addList, boardOptions, modifyList} = this.props;
    value = null;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Modifying an existing list</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor = "black"
            style={styles.textInput}
            value={this.state.name}
            onChangeText={ text => this.updateName(text)}/>
          <Text>Pick a color then press the middle to select!</Text>
          <ColorPicker
            onColorSelected={color => this.updateColor(color)}
            style={{height:200,width:200}}/>
          <Text style={styles.colorText}>Selected color: {this.state.color}</Text>
          <Text style={styles.pickerText}>Pick a Board:</Text>
          <Dropdown
            label='Boards'
            data={boardOptions}
            value={this.state.boardName}
            onChangeText={(value) => this.updateBoard(value)}/>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={() => modifyList(this.state)}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }

}

export default ModifyListModal;
