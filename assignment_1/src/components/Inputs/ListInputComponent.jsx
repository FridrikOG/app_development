import React from 'react';
import {View, TextInput} from 'react-native';

class ListInputComponent extends React.Component{
    state = {
        comment: ''
    }
    render(){
        return(
            <View>
                <TextInput
                    autoCapitalize='sentence'
                    autoCompleteType='name'
                    value={ this.state.comment}
                    onChangeText={ text=> this.updateComment(text)}/> 
            </View>
        )
    }
};

export default ListInputComponent;