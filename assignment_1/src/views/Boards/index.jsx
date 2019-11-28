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
}
  removeSelectedBoards(){
    const {selectedIds, boards} = this.state;
    for (var boardId in selectedIds){
      console.log('in foor loop');
      this.setState({
        boards: boards.filter(x => x.id !== selectedIds[boardId])
      })
    }
    console.log("Logging boards: ", this.state.boards)
  }
// This one should display a caption whenever someone selects a board
// How this one also shows if it should be plural or not
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
    const props = this.props;
    const {selectedIds, boards} = this.state
    //console.log("LOGGING SELECTED ID's " ,this.selectedIds)
    return (
      <View style = {{ flex: 1}}>
        <Toolbar 
        hasSelectedIds = {selectedIds.length > 0 } 
        onRemove ={() => this.removeSelectedBoards()} /> 
        { this.displayCaption()}
        <BoardList 
        boards={ boards } 
        props={props} 
        onLongPress={(boardId) => this.onBoardLongPress(boardId)} 
        selectedIds = {selectedIds} />
      </View>
    )
  }
};
    export default Boards;
