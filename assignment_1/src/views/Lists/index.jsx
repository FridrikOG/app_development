import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import ListLists from '../../components/ListLists';
import styles from './styles';
const boardsList = data.lists;

const Lists = () => (
  <View>
    <Toolbar />
    <Text style={{ padding: 100, textAlign: 'center' }}>
        You're in our list

      { boardsList.map(function(item,index) {
        
        return ( <Text style={styles.lists}> Item ID: {item.id} Name: {item.name} 
        color code: {item.color} boardId: {item.boardid}</Text>
        
        )
      }
      )}
    </Text>
  </View>
);

export default Lists;