import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';


class Boards extends React.Component {
  state = {
    // The board data list
    boards: data.boards,
    // All boards within the application directory
    ids: [],
    // All selected boards
    selectedIds: [],
}
  onBoardLongPress(id){
  const {selectedIds} = this.state;
  if (selectedIds.indexOf(id) !== -1){
    // ID is already within the list
    this.setState({
      selectedIds: selectedIds.filter(x => x !== id)
    });
  } else{
    // IDs need to be added
    this.setState({
      selectedIds: [...selectedIds, id]
    })
  
  }
  console.log(this.state.selectedIds)  
}
  displayCaption() {
    const { selectedIds } = this.state
    if (selectedIds.length === 0) { return;}

    let itemCaption = 'boards';
    if (selectedIds.length === 1) {
      itemCaption = 'board';
    }
    return <Text>You have {selectedIds.length} selected {itemCaption} </Text>
  }

  render() {
    //console.log("LOGGING DATA BOARDS: ", data.boards)
    const props = this.props;
    const {selectedIds, boards} = this.state
    //console.log("IDS : ", this.selectedIds)  
    return (
      <View style = {{ flex: 1}}>
        <Toolbar hasSelectedIds = {selectedIds.length > 0 }/> 
        { this.displayCaption()}
        <BoardList boards={ boards } props={props} onLongPress={(boardId) => this.onBoardLongPress(boardId)} selectedIds = {selectedIds} />
      </View>
    )
  }
};
    export default Boards;
/*
      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        <Toolbar/>
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
*/
  




/*

FUNCTION TO DO BOARD PRESS VERY NICELY WRITTEN WITH NULL
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
*/