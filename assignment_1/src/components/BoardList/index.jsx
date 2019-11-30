import React from 'react';
import {
  View, ScrollView, Text, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import checkmark from '../../resources/select2.png';


const BoardList = ({
  boards, props, onLongPress, selectedIds,
}) => (
  <ScrollView style={styles.container}>
    <Text style={styles.type}>
          Board List
    </Text>
    <FlatList
      numColumns={1}
      data={boards}
      extraData={selectedIds}
      style={styles.flatlist}
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
            <View style={[styles.board, { opacity: isSelected ? 0.5 : 1 }]}>
              {isSelected ? <Image source={checkmark} style={styles.selectIcon} name="checkcircleo" /> : <></>}
              <ImageThumbnail file={thumbnailPhoto} />
              <Text style={styles.title}>
                Name:
                {' '}
                {name}
              </Text>
              <Text style={styles.description}>
                Description:
                {' '}
                {description}
              </Text>
              <Text style={styles.description}>
                ID:
                {' '}
                {id}
              </Text>
              <Text style={styles.isSelected}>
                {isSelected ? 'Selected' : 'Not selected'}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(board) => board.id}
    />
  </ScrollView>
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
