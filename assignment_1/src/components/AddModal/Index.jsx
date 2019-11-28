import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Text, View, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import t from 'tcomb-form-native';
import Modal from '../Modal';
import styles from './styles';




function someFunction(){

}

class AddModal extends React.Component {
    render() {
      const { isOpen, closeModal, addList } = this.props;
      return(
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          addList={addList}>

        </Modal>
      )
  }
}

export default AddModal;
