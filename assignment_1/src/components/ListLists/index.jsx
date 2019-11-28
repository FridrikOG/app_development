import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';

const ListLists = ({lists, onLongPress, selectedIds, props})  => (
    
    <View style={ styles.listContainer }>
        <FlatList
          numColumns={ 1 }
          data={ lists }
          extraData={selectedIds}
          renderItem={ ({ item: { id, name, color, boardId } }) => {
            const isSelected = selectedIds.indexOf(id) !== -1
            console.log("fucking PROPS: ",props.navigation.navigate);
            return(
              <TouchableOpacity
              activeOpacity={0.75}
              onLongPress={() => onLongPress(id)}
              onPress={() => props.navigation.navigate('Tasks')}
              >
              {isSelected ? <AntDesign name = "checkcircleo"/> : <></>}
              <View style={[styles.container, {opacity: isSelected ? 0.5 : 1 }]}>
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
