import React from 'react';
import { View, FlatList } from 'react-native';


const ListLists = ({ lists }) => (
    <View>
        <FlatList
            numColumns={ 3 }
            data={ lists }
            renderItem={ ({ item: { id, name } }) => {
                return (
                    <Text> { name }</Text>
                );
            } }
            keyExtractor={ lists => lists.name } />
    </View>
);


export default ListLists;
