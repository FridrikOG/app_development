import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({
  boards, props, onLongPress, selectedIds,
}) => (
  <View style={styles.container}>
    <Text style={styles.type}>
          Board List
    </Text>
    <FlatList
      numColumns={1}
      data={boards}
      extraData={selectedIds}
      renderItem={({
        item: {
          name, description, thumbnailPhoto, id,
        },
      }) => {
        const isSelected = selectedIds.indexOf(id) !== -1;
        return (
          <TouchableOpacity
            activeOpacity={0.75}
            onLongPress={() => onLongPress(id)}
            onPress={() => props.navigation.navigate('Lists', { boardId: id, boards })}
          >
            {isSelected ? <AntDesign name="checkcircleo" /> : <></>}
            <View style={[styles.board, { opacity: isSelected ? 0.5 : 1 }]}>
              <ImageThumbnail file={thumbnailPhoto} />
              <Text style={styles.title}>
                {name}
              </Text>
              <Text style={styles.description}>
                {description}
              </Text>
              <Text style={styles.description}>
                {id} 
              </Text>
              <Text>
                {isSelected ? 'Selected' : 'Not selected'}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(board) => board.id}
    />
  </View>
);
BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.isRequired,
  props: PropTypes.objectOf(PropTypes).isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  navigation: PropTypes.objectOf(PropTypes).isRequired,
};


export default BoardList;
