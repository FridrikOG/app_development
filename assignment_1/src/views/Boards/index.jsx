import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardModal from '../../components/BoardModal';


class Boards extends React.Component {
  state = {
    // The board data list
    boards: data.boards,
    // All boards within the application directory
    ids: [],
    // All selected boards
    selectedIds: [],
    isAddModalOpen: false,
  }
  onBoardLongPress(id){
  const {selectedIds} = this.state;
  if (selectedIds.indexOf(id) !== -1){
    // ID is already within the list
    this.setState({
      selectedIds: selectedIds.filter(x => x !== id)
    });
    }else{
    // IDs need to be added
    this.setState({
      selectedIds: [...selectedIds, id]
    })}
  }
  removeSelectedBoards(){
    const {selectedIds,boards} = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      boards: boards.filter(board => selectedIds.indexOf(board.id) == -1),
      selectedImages: [],
    })}
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
  addBoard = (info) => {
    console.log("AT THE ADD FUNCTION");
    console.log(info);
    const { boards } = this.state;
    this.setState({ boards: [ ...boards, info ], isAddModalOpen: false });
    console.log(boards);
  }
  render() {
    const props = this.props;
    const {selectedIds, boards, isAddModalOpen} = this.state
    //console.log("Logging boards: ", this.state.boards)
    //console.log("LOGGING SELECTED ID's " ,this.selectedIds)
    return (
      <View style = {{ flex: 1}}>
        <Toolbar
        onAdd={() => this.setState({ isAddModalOpen: true})}
        hasSelectedIds = {selectedIds.length > 0 }
        onRemove ={() => this.removeSelectedBoards()} />
        { this.displayCaption()}
        <BoardList
        boards={ boards }
        props={props}
        onLongPress={(boardId) => this.onBoardLongPress(boardId)}
        selectedIds = {selectedIds} />
        <BoardModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({isAddModalOpen: false})}
          addBoard={(info) => this.addBoard(info)}
        />
      </View>
    )
  }
};
    export default Boards;
