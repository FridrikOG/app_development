import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import data from '../../resources/data.json';

class Boards extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ padding: 100, textAlign: 'center' }}>Nothin to see here</Text>
        <FlatList
            numColumns={ 3 }
            data={ data.boards }
        />

      </View>
    )
  }
};


export default Boards;
