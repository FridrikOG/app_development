import React from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({ boards, props, onLongPress, selectedIds }) => {
    console.log("Logging in props: ", props)
    console.log("LOGGING ID's in board " , selectedIds)
    
    
    return (
        <View style={styles.container}>
        <Text style = {styles.type} > Board List </Text>
        <FlatList
            numColumns = {1}
            data={boards}
            extraData={selectedIds}
            renderItem={( {item: {name, description, thumbnailPhoto, id }}) => {
                console.log(selectedIds.indexOf(id) !== -1)
                //isSelected = false 
                return (
                    <TouchableOpacity onLongPress={() => onLongPress(id)} onPress={() => props.navigation.navigate('Lists', {boardId:boards.id, name:boards.name})}>
                    <View style={styles.boards} >
                        <ImageThumbnail file={thumbnailPhoto} />
                        <Text style={styles.title}> {name} </Text>
                        <Text style={styles.description}>{description} </Text>
                        <Text style={styles.description}>{id} </Text>
                        <Text> {selectedIds.indexOf(id) !== -1 ? 'Selected' : 'Not selected'}</Text>
                    </View>
                    </TouchableOpacity>
                )
            } 
        }
        keyExtractor={ (board) => board.id }/>
        </View>
    
    )
}

export default BoardList;
