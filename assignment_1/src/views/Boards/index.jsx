import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardModal from '../../components/BoardModal';
import ModifyBoardModal from '../../components/BoardModal/ModifyBoardModal';

class Boards extends React.Component {
  // this.props.navigation.state.params.data
  state={
    // The board data list
    boards: data.boards,
    // All boards within the application directory
    ids: [],
    // All selected boards
    selectedIds: [],
    // This one starts as false and is used in the Modal (located in components)
    isAddModalOpen: false,
    
    isModifyModalOpen : false
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
      selectedIds: [],
    })
  }
  // This one should display a caption whenever someone selects a board
  // How this one also shows if it should be plural or not
  displayCaption() {
    const { selectedIds } = this.state
    if (selectedIds.length === 0) { return;}
    let itemCaption = 'boards';
    if (selectedIds.length === 1) {
      let itemCaption = 'board';
    }
    return <Text>You have {selectedIds.length} selected {itemCaption} </Text>
  }

  addBoard = (info) => {
    const { boards } = this.state;
    var maxId = 0;
    var maxobj;
    boards.map(function(obj){
      if (obj.id > maxId) maxId = obj.id;
    });
    // We get the highest id of any list
    maxId += 1
    newBoard = {
      "id": maxId,
      "name": info.name,
      "description": info.description,
      "thumbnailPhoto": info.thumbnailPhoto
    }
    this.setState({ boards: [ ...boards, newBoard ], isAddModalOpen: false });
  }

  addModifiedBoard = (newBoard) => {
    const {boards, isModifyModalOpen} = this.state;
    this.setState({ boards: [ ...boards, newBoard ], isModifyModalOpen: false });

  }
  
  modifyBoard = (info, boardId) => {
    const {selectedIds,boards} = this.state;
    newBoard = {
      "id": boardId[0],
      "name": info.name,
      "description": info.description,
      "thumbnailPhoto": info.thumbnailPhoto,
    }
  
    let newBoards = boards.filter(board => selectedIds.indexOf(board.id) == -1)
    this.setState({boards: [...newBoards,newBoard], isModifyModalOpen: false, selectedIds: []})

  }
  render() {

    const props = this.props;
    const {selectedIds, boards, isAddModalOpen, isModifyModalOpen} = this.state
    return (
      <View style = {{ flex: 1}}>
        <Toolbar
        onAdd={() => this.setState({ isAddModalOpen: true})}
        onModify={() => this.setState({ isModifyModalOpen: true})}
        hasSelectedIds = {selectedIds.length > 0 }
        canModify = {!(selectedIds.length == 0 || selectedIds.length > 1)}
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
        <ModifyBoardModal
          boards = {boards}
          boardId = {selectedIds}
          isOpen={isModifyModalOpen}
          closeModal={() => this.setState({isModifyModalOpen:false})}
          modifyBoard={(info) => this.modifyBoard(info, selectedIds)}
        />
      </View>
    )
  }
};

export default Boards;
