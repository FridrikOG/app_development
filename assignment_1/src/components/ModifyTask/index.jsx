import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';

const message = 'lol'
class ModifyTask extends React.Component {
  state = {
    listID: '',
    listOption: '',
  }
  updateTask(listOption){
    this.setState({listOptions});
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
          <Text style={styles.title}>Move task</Text>
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
