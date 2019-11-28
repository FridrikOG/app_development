import React from 'react';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const List = t.struct({
  id: t.Integer,
  name: t.String,
  color: t.String,
  boardId: t.String,
});

const Modal = ({ isOpen, closeModal, addList }) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop
    onBackButtonPress={closeModal}
    onSwipeComplete={['up','down']}
    style={styles.modal}>
    <View style={[styles.container]}><Text>Creating a New list</Text><Form type={List} />
      <Button
        title="Submit"
        onPress={addList()}/>
    </View>
  </NativeModal>
);

Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',

};

export default Modal;
