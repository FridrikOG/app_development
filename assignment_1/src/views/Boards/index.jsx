import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import Toolbar from '../../components/Toolbar';
// import GalleryList from '../../components/GalleryList';
import ImageThumbnail from '../../components/ImageThumbnail';
import data from '../../resources/data.json';
import styles from './styles';


const boardsList = data.boards;

class Boards extends React.Component {
  render() {
    return (
      <View style={styles.board}>
        { boardsList.map(function(item,index) {
          return(
            <View><Text>{item.name}</Text>
            <ImageThumbnail file={item.thumbnailPhoto}/>
            </View>
          )}
        )}
      </View>
    );
  }
};


export default Boards;
