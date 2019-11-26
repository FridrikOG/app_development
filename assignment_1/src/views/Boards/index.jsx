import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
// import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import ImageThumbnail from '../../components/ImageThumbnail';
import data from '../../resources/data.json';
import styles from './styles';


const boardsList = data.boards;

class Boards extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        { boardsList.map(function(item,index) {
          return(
            <View style={styles.board}>
              <ImageThumbnail file={item.thumbnailPhoto}/>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        )}
      </ScrollView>
    );
  }
};


export default Boards;
