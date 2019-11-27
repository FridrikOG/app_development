import React from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = props => {
    console.log("ege",props.navigate);
    console.log("ID in BOARDSLIST: ",props.boardId);
    return (
    <TouchableHighlight style={styles.button} onPress={() => {props.navigate('Lists',{boardId: props.boardId, name: props.name,})}}>
        <View style={styles.board}>
            <ImageThumbnail file={props.images}/>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    </TouchableHighlight>
    )
}

export default BoardList;
