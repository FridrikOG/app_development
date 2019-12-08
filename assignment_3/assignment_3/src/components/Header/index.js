import React from 'react';
import { View, StyleSheet} from 'react-native'

const Header = () => (
    <View style={ styles.header }></View>
);

const styles = StyleSheet.create({
    header: {
        height:100,
        width:'100%',
        backgroundColor: 'lightgray'
    }
})

export default Header;