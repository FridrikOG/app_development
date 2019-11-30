import React from 'react';
import NativeModal from 'react-native-modal';
import PropTypes from 'prop-types';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import styles from './styles';

class ModifyBoardModal extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: '',
    description: '',
    thumbnailPhoto: '',
    isValid: true,
    hasRecievedNameInput: true,
    hasRecievedDescriptionInput: true,
    nameRequired: '',
  }

  // eslint-disable-next-line react/sort-comp
  updateName(name) {
    // Name of board has to be at least 3 characters
    if (name.length > 2) {
      this.setState({
        isValid: true,
        hasRecievedNameInput: false,
      });
      // If name of board becomes less than 3 characters we make the form invalid for submission
    } else {
      this.setState({
        isValid: false,
      });
    }
    this.setState({ name });
  }

  updateDescription(description) {
    const { hasRecievedDescriptionInput } = this.state;

    if (hasRecievedDescriptionInput) {
      this.setState({ hasRecievedDescriptionInput: false });
    }
    this.setState({ description });
  }

  getBoard() {
    const { boards, boardId } = this.props;
    const board = boards.filter((x) => x.id === boardId[0]);
    return board[0];
  }

  getName() {
    const board = this.getBoard();
    try {
      return board.name;
    } catch (err) {
      return 'error';
    }
  }

  getDescription() {
    const board = this.getBoard();
    try {
      return board.description;
    } catch (err) {
      return 'error';
    }
  }

  determineErrorMsg() {
    const { isValid } = this.state;
    if (isValid === false) {
      this.setState({ nameRequired: 'Name of the board must be more than two characters.' });
    } else {
      this.setState({ nameRequired: '' });
    }
  }

  cleanUp(Submit) {
    const {
      modifyBoard, closeModal,
    } = this.props;
    // Clean up error meassges
    // Resetting the states
    this.setState({
      hasRecievedNameInput: true,
      hasRecievedDescriptionInput: true,
    });
    if (Submit) {
      // If the submit button is pushed we modify the board
      modifyBoard(this.state);
    } else {
      closeModal();
    }
  }

  render() {
    const {
      isOpen, closeModal,boards, boardId
    } = this.props;
    const {
      description, name, nameRequired, isValid, hasRecievedNameInput, hasRecievedDescriptionInput,
    } = this.state;
 
    const bool = true;
    return (
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up', 'down']}
        style={styles.modal}
      >
        <ScrollView style={[styles.container]}>
          <Text style={styles.title}>Modifying existing board</Text>
          <Text style={{ color: 'red' }}>{nameRequired}</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="black"

            value={hasRecievedNameInput ? this.getName() : name}

            onChangeText={(text) => this.updateName(text)}
          />
          <TextInput
            style={[styles.textInput, { height: 200 }]}
            placeholder="Description (optional)"
            placeholderTextColor="black"
            editable={bool}
            multiline={bool}
            value={hasRecievedDescriptionInput ? this.getDescription() : description}
            onChangeText={(text) => this.updateDescription(text)}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={isValid ? () => this.cleanUp(true) : () => this.determineErrorMsg()}
            >
              <Text
                style={styles.btntxt}
              >
                  Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.cleanUp(false)}
            >
              <Text
                style={styles.btntxt}
              >
                  Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </NativeModal>
    );
  }
}

ModifyBoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
  boards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes)).isRequired,
  modifyBoard: PropTypes.func.isRequired,
};

export default ModifyBoardModal;
