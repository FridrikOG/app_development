import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';

class Boards extends React.Component {
  onBoardLongPress(name) {
  }

  render() {
    const props = this.props;
    return (

      <ScrollView style={styles.container}>
        <Text></Text>
        <Text style={styles.type}>Board List</Text>
        {data.boards.map(function(item,index){
          console.log("ID in BOARDS: ",item.id);
          return(
            <BoardList boardId={item.id} images={item.thumbnailPhoto} name={item.name} description={item.description} navigate={props.navigation.navigate}/>
          )}
        )}
      </ScrollView>

    )
  }
};

export default Boards;
