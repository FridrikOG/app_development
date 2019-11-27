import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import ImageThumbnail from '../../components/ImageThumbnail';
import data from '../../resources/data.json';
import styles from './styles';


const boardsList = data.boards;

const Boards = ({ navigation: { navigate } }) => (

      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        { boardsList.map(function(item,index){ 

          return(
            <TouchableHighlight style={styles.button} onPress={() => {navigate('Lists', {boardId: item.id, title: item.title})}}>
            <View style={styles.board}>
              <ImageThumbnail file={item.thumbnailPhoto}/>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            </TouchableHighlight>
          )}
        )}
      </ScrollView>
);

export default Boards;
