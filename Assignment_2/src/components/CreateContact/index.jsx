/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {
  NativeModal,
  Text,
  TextInput,
  ScrollView,
  View,
} from 'react-native';

class CreateContact extends React.Component {
  state = {
    name: '',
  }

  render() {
    const { isOpen } = this.props;
    return (
      <NativeModal
        isVisible={isOpen}
      >
        <ScrollView>
          <Text> Hello </Text>
        </ScrollView>
      </NativeModal>
    );
  }
}


export default CreateContact;
