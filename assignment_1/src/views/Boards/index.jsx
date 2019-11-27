import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';

class Boards extends React.Component {
  state = {
    // All images within the application directory
    ids: [],
    // All selected images
    selectedIds: [],
}

  onBoardPress(id){
    const {selectedIds} = this.state;
    
    if (selectedIds.includes(id) == false){
      console.log("Not there")
      selectedIds.push(id)
    } else{
      console.log('is there')
      let indexId = selectedIds.indexOf(id)
      selectedIds[indexId] = null 
      //this.setState({selectedIds: selectedIds.filter(x => x !== id)})
      }
      console.log("LOGGING ARRAY: ",selectedIds)
      }


  render() {
    const props = this.props;
    handler = (id) =>{
      console.log("YOU MADE IT");
      this.onBoardPress(id);

    }
    return (


      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>

        {data.boards.map(function(item,index){
          onBoardLongPress = (id) => {
            console.log("THIS IS A LONG ONE");
            this.handler(id);
          };
          console.log("ID in BOARDS: ",item.id);
          return(
            <TouchableOpacity
            onPress={() => {this.onBoardLongPress(item.id)}}
            onLongPress={() => {props.navigation.navigate('Lists',{boardId: props.boardId, name: props.name})}}
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
