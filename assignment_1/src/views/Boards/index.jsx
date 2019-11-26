import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
// import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import data from '../../resources/data.json';

const boardsList = data.boards;

class Boards extends React.Component {
  render() {
    return (
      <View>
        { boardsList.map(function(item,index) {
          return <Text>{item.name}</Text>
          }
        )}
      </View>
    );
  }
};


export default Boards;
