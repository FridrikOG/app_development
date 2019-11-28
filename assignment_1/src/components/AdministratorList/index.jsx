import React from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';


const AdministratorList = ({ administrators}) => {
    console.log(" LOGGING IN ADMIN LIST: " , administrators)
    return (
        <View style={styles.container}>
        <Text style = {styles.type} > Administrator view </Text>
        <FlatList
            numColumns = {1}
            data={administrators}
            renderItem={( {item: {name, id, email, photo }}) => {
                return (
                    
                        <ImageThumbnail file={photo} />
                )
            }
        }
        keyExtractor={ (administrators) => administrators.id }/>
        </View>
    )
}
export default AdministratorList;