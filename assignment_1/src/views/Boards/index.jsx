import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import data from '../../resources/data.json';

const Boards = () => (
  <View>
    <Toolbar />
    <Text style={{ padding: 100, textAlign: 'center' }}>
        This is our board list
    </Text>
    
  </View>
);


export default Boards;
