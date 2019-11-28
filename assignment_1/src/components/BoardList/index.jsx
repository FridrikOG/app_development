import React from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const BoardList = ({ boards, props, onLongPress, selectedIds }) => {

    return (
        <View style={styles.container}>
        <Text style = {styles.type} > Board List </Text>
        <FlatList
            numColumns = {1}
            data={boards}
            extraData={selectedIds}
            renderItem={( {item: {name, description, thumbnailPhoto, id }}) => {
                const isSelected = selectedIds.indexOf(id) !== -1
                return (
                    <TouchableOpacity
                    activeOpacity={0.75}
                    onLongPress={() => onLongPress(id)}
                    onPress={() => props.navigation.navigate('Lists', {boardId:id, name:name})}>
                    {isSelected ? <AntDesign name = "checkcircleo"/> : <></>}
                    <View style={[styles.board, {opacity: isSelected ? 0.5 : 1 }]} >
                        <ImageThumbnail file={thumbnailPhoto} />
                        <Text style={styles.title}> {name} </Text>
                        <Text style={styles.description}>{description} </Text>
                        <Text style={styles.description}>{id} </Text>
                        <Text> {isSelected ? 'Selected' : 'Not selected'}</Text>
                    </View>
                    </TouchableOpacity>
                )
            }
        }
        keyExtractor={ (board) => board.id }/>
        </View>

    )
}

BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnailPhoto: PropTypes.string.isRequired
    })).isRequired,
    ongLongPress: PropTypes.func.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.integer).isRequired
}


export default BoardList;
