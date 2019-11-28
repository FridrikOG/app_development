import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListLists from '../../components/ListLists';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';

class Lists extends React.Component{
  state = {
    lists: data.lists,
    selectedLists: [],
    isAddModalOpen: false,
  }

  addList = (info) => {
    console.log("AT THE ADD FUNCTION");
    console.log(info);
    const { lists } = this.state;
    this.setState({ lists: [ ...lists, info ], isAddModalOpen: false });
    console.log(lists);
  }

  render(){
    const props = this.props.navigation.state.params;
    const { lists, selectedLists, isAddModalOpen } = this.state;
    const toShow = []
    console.log(props);
    console.log('ID in LISTS: ',props.boardId);
    console.log("TO SHOW: ", toShow)

    return(
      <ScrollView>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true})}
          />
        <Text style={styles.title}>Currently in Board: {props.boardId}</Text>
        {lists.map(function(item,index){
          if (item.boardId == props.boardId){
            console.log("ITEM ID: ", item.boardId, props.boardId, item);
            toShow.push(item);
          }
        })}
        <ListLists lists={toShow}/>
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({isAddModalOpen: false})}
          addList={(info) => this.addList(info)}
        />
      </ScrollView>
    )
  }
};

export default Lists;
