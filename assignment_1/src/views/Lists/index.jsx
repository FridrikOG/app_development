import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListLists from '../../components/ListLists';
import ListModal from '../../components/ListModal';
import ModifyListModal from '../../components/ListModal/ModifyListModal';
import data from '../../resources/data.json';
import styles from './styles';
class Lists extends React.Component{
  state = {
    lists: data.lists,
    selectedIds: [],
    isAddModalOpen: false,
    isModifyModalOpen : false,
  }
// This function should take in information from our form and add it to our board list
  addList = (submittedInfo) => {
    const { lists } = this.state;
    var maxId = 0;
    var maxobj;
    lists.map(function(obj){
      if (obj.id > maxId) maxId = obj.id;
    });
    // We get the highest id of any list
    maxId += 1
    boardId = 0;
    const boards = this.props.navigation.state.params.boards
    //console.log("Inside addList in lists", boards)
    // The id of the board corresponding to the board name picked
    boards.map(function(board){
      if(board.name == submittedInfo.boardName)
        boardId = board.id;
    })
    // Name input by the user
    let name = submittedInfo.name
    // Color selected by the user
    let color = submittedInfo.color
    // Creating a new object to be combined with our lists
    newList = {
      "id": maxId,
      "name": name,
      "color": color,
      "boardId": boardId
  }
    this.setState({ lists: [ ...lists, newList ], isAddModalOpen: false });

  }

  onListLongPress(id){
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
  removeSelectedLists(info, selectedids){
    const {selectedIds,lists} = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      lists: lists.filter(list => selectedIds.indexOf(list.id) == -1),
      selectedIds: [],
    })}

  displayCaption() {
    const { selectedIds } = this.state
    if (selectedIds.length === 0) { return;}

    let itemCaption = 'boards';
    if (selectedIds.length === 1) {
      itemCaption = 'board';
    }
    return <Text>You have {selectedIds.length} selected {itemCaption} </Text>
  }
  modifyList (info, selectedIds) {
    
    const {lists} = this.state;
    const boards = this.props.navigation.state.params.boards
    boards.map(function(board){
      if(board.name == info.boardName)
        boardId = board.id;
    })
    newList = {
      "id": selectedIds[0],
      "name": info.name,
      "color": info.color,
      "boardId": boardId,
    }
    console.log("Logging info: ", info);
    
  
    let newLists = lists.filter(list => selectedIds.indexOf(list.id) == -1)
    this.setState({lists: [...newLists,newList], isModifyModalOpen: false, selectedIds: []})
    console.log("Logging lists: ", lists)

  }

  render(){
    const params = this.props.navigation.state.params;
    const { lists, selectedIds, isAddModalOpen, isModifyModalOpen } = this.state;
    const toShow = [];
    const  boardNames = []
    const boards = this.props.navigation.state.params.boards;
    boards.map(function(item,index){
        boardNames.push({value: item.name});
      })
    return(
      <ScrollView>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true})}
          onModify={() => this.setState({ isModifyModalOpen: true})}
          hasSelectedIds = {selectedIds.length > 0 }
          onRemove ={() => this.removeSelectedLists()}
          canModify = {!(selectedIds.length == 0 || selectedIds.length > 1)}

          />
          { this.displayCaption()}
        <Text style={styles.title}>Currently in Board: {params.boardId}</Text>
        {lists.map(function(item,index){
          if (item.boardId == params.boardId){
            toShow.push(item);
          }
        })}
        <ListLists
        lists={toShow}
        onLongPress={(listId) => this.onListLongPress(listId)}
        selectedIds = {selectedIds}
        props= {this.props}
        />
        <ListModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({isAddModalOpen: false})}
          addList={(info) => this.addList(info)}
          boardOptions={boardNames}
        />
        <ModifyListModal
          lists = {boards}
          listId = {selectedIds}
          isOpen={isModifyModalOpen}
          closeModal={() => this.setState({isModifyModalOpen:false})}
          modifyList={(info) => this.modifyList(info, selectedIds)}
          boardOptions = {boardNames}
        />
      </ScrollView>
    )
  }
};

export default Lists;
