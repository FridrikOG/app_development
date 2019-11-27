import React from 'react';
import { View,Text,TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = props => (
    <TouchableHighlight style={styles.button} onPress={() => {navigate('Lists', {boardId: item.id, title: item.title})}}>
        <View style={styles.board}>
            <ImageThumbnail file={props.images}/>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    </TouchableHighlight>
)

export default BoardList;