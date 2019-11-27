import React from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = props => {
    console.log("ege",props.navigate)
    return (
    <TouchableHighlight style={styles.button} onPress={() => {props.navigate('Lists',{boardId: props.id, title: props.title})}}>
        <View style={styles.board}>
            <ImageThumbnail file={props.images}/>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    </TouchableHighlight>
    )
}

export default BoardList;