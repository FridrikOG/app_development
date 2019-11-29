import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { ColorPicker } from 'react-native-color-picker'


class ListModal extends React.Component {
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
    const { isOpen, closeModal, addList, boardOptions} = this.props;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Creating a New list</Text>
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
            <View style={styles.picker}>
            <Picker
              style={{fontSize: 10, height:30}}
              selectedValue={ this.state.boardName }
              onValueChange={ boardName => this.updateBoard(boardName)}>
              {
                boardOptions.map(name => (<Picker.Item label={name} value={name}/>))
              }
            </Picker>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={() => addList(this.state)}><Text style={styles.btntxt}>Submit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.btntxt}>Go Back</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }

}

export default ListModal;
