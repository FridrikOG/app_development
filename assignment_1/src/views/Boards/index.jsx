import React from 'react';
import { View, Text } from 'react-native';
// import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import data from '../../resources/data.json';

const Boards = () => (
  <View>
    <Text style={{ padding: 100, textAlign: 'center' }}> This is our board list</Text>
    console.log(data)
  </View>
);

export default Boards;
