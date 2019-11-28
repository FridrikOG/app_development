import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListLists from '../../components/ListLists';
import ListModal from '../../components/ListModal';
import data from '../../resources/data.json';
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';

class Lists extends React.Component{
  state = {
    lists: data.lists,
    selectedIds: [],
    isAddModalOpen: false,
  }

  addList = (info) => {
    const { lists } = this.state;
    this.setState({ lists: [ ...lists, info ], isAddModalOpen: false });

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
  removeSelectedBoards(){
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

  render(){
    const params = this.props.navigation.state.params;
    const { lists, selectedIds, isAddModalOpen } = this.state;
    const toShow = []
    console.log("Logging selected IDs: ", this.state.selectedIds)
    return(
      <ScrollView>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true})}
          hasSelectedIds = {selectedIds.length > 0 }
          onRemove ={() => this.removeSelectedBoards()}
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

        />
        <ListModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({isAddModalOpen: false})}
          addList={(info) => this.addList(info)}
        />
      </ScrollView>
    )
  }
};

export default Lists;
