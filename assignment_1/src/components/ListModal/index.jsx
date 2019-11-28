import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, Button } from 'react-native';
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
    console.log(boardOptions);
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <View style={[styles.container]}>
          <Text style={styles.title}>Creating a New list</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
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
              selectedValue={ this.state.boardName }
              onValueChange={ boardName => this.updateBoard(boardName)}>
              {
                boardOptions.map(name => (<Picker.Item label={name} value={name}/>))
              }
            </Picker>
          </View>
          <Button
            title="Submit"
            onPress={() => addList(this.state)}/>
        </View>
      </NativeModal>
    );
  }

}

export default ListModal;
