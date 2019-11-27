import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';


const getParameters = ({ props }) => {
    console.log("Inside props: ",props)
    return props.navigation.state.param
}
export default getParameters;

