import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const ListLists = ({lists, onLongPress})  => (
    <View style={ styles.listContainer }>
        <FlatList
          numColumns={ 1 }
          data={ lists }
          renderItem={ ({ item: { id, name, color, boardId } }) => {
            return(
              <TouchableOpacity
              activeOpacity={0.75}
              onLongPress={() => onLongPress(id)}
              >
              <View style={styles.container}>
                <Text style={[styles.text, {backgroundColor:color}]}>
                  List: {id} {"\n"}
                  Name: {name} {"\n"}
                  Color code: {color} {"\n"}
                </Text>
              </View>
              </TouchableOpacity>
            )
            
          }}
            keyExtractor={ item => item.id } />
    </View>

)

export default ListLists;
