import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Text, View, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import t from 'tcomb-form-native';
import BoardModal from '../BoardModal';
import styles from './styles';


class AddBoardModal extends React.Component {
    render() {
      const { isOpen, closeModal, addBoard } = this.props;
      return(
        <BoardModal
          isOpen={isOpen}
          closeModal={closeModal}
          addBoard={addBoard}>

        </BoardModal>
      )
  }
}

export default AddBoardModal;
