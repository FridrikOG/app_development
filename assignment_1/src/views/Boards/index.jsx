import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';

class Boards extends React.Component {
  fffuck(){
    console.log("well fuck");

  }

  render() {
    const props = this.props;
    handler = () =>{
      console.log("YOU MADE IT");
      this.fffuck();

    }
    return (


      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>

        {data.boards.map(function(item,index){
          onBoardLongPress = () => {
            console.log("THIS IS A LONG ONE");
            this.handler();
          };
          console.log("ID in BOARDS: ",item.id);
          return(
            <TouchableOpacity
            onLongPress={this.onBoardLongPress}
            onPress={() => {props.navigation.navigate('Lists',{boardId: props.boardId, name: props.name})}}
            style={styles.button}>
              <BoardList boardId={item.id} images={item.thumbnailPhoto} name={item.name} description={item.description} navigate={props.navigation.navigate}/>
            </TouchableOpacity>
          )}
        )}

      </ScrollView>

    )
  }
};





export default Boards;
