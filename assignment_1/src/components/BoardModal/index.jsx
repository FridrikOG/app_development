import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Board = t.struct({
  id: t.Integer,
  name: t.String,
  description: t.maybe(t.String),
  thumbnailPhoto: t.String,
});

class BoardModal extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  render() {
    const { isOpen, closeModal, addBoard} = this.props;
    return(
      <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={['up','down']}
        style={styles.modal}>
        <View style={[styles.container]}><Text>Creating a New Board</Text>
          <Form
            ref={c => this._form = c}
            type={Board} />
          <Button
            title="Submit"
            onPress={() => addBoard(this._form.getValue())}/>
        </View>
      </NativeModal>
    );
  }

}

export default BoardModal;
