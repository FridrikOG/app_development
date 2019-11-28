import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const ListLists = ({lists})  => (
    <View style={ styles.listContainer }>
        <FlatList
          numColumns={ 1 }
          data={ lists }
          renderItem={ ({ item: { id, name, color, boardId } }) => {
            return(
              <View style={styles.container}>
                <Text style={[styles.text, {backgroundColor:color}]}>
                  List: {id} {"\n"}
                  Name: {name} {"\n"}
                  Color code: {color} {"\n"}
                </Text>
              </View>
            )
          }}
            keyExtractor={ item => item.id } />
    </View>

)

export default ListLists;
