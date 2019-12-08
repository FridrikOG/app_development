import React from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends React.Component {
    state = {
        counter : 0 
    }
    onIncrement() {
        const { counter } = this.state;
        this.setState( { counter:counter+1 } )
    }
    render() {
        const { counter } = this.state;
    return (
        <View>
            <Text> { counter }</Text>
            <Button title="Increment" onPress={ () => this.onIncrement}/>
        </View>
        )
    }
}

export default Counter;