import React from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = props => {
    console.log("ege",props.navigate);
    console.log("ID in BOARDSLIST: ",props.boardId);
    return (
        <View style={styles.board}>
            <ImageThumbnail file={props.images}/>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
}

export default BoardList;
