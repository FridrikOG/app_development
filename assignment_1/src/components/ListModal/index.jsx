import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const createList = t.struct({
  //id: t.Integer,
  name: t.String,
  color: t.String,
  //boardId: t.String,
});

const options = {
  fields: {
    name: {
      error: 'Please name the list?'
    },
  },
};




class Modal extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  render() {
    const { isOpen, closeModal, addList} = this.props;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <View style={[styles.container]}><Text>Creating a New list</Text>
          <Form
            ref={c => this._form = c}
            type={createList} 
            options={options}
            />
           
          <Button
            title="Submit"
            onPress={() => addList(this._form.getValue())}/>
        </View>
      </NativeModal>
    );
  }

}

export default Modal;
