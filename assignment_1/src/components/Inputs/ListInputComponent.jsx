import React from 'react';
import { View, TextInput } from 'react-native';

class ListInputComponent extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      comment: '',
    }

    render() {
      const { comment } = this.state;
      return (
        <View>
          <TextInput
            autoCapitalize="sentence"
            autoCompleteType="name"
            value={comment}
            onChangeText={(text) => this.updateComment(text)}
          />
        </View>
      );
    }
}
export default ListInputComponent;
