import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListLists from '../../components/ListLists';
import data from '../../resources/data.json';
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';

class Lists extends React.Component{
  state = {
    lists: data.lists,
    selectedLists: [],
  }

  render(){
    const props = this.props.navigation.state.params;
    const { lists, selectedLists } = this.state;
    const toShow = []
    console.log(props);
    console.log('ID in LISTS: ',props.boardId);
    console.log("TO SHOW: ", toShow)
    return(
      <ScrollView>
        <Toolbar />
        <Text style={styles.title}>Currently in Board: {props.boardId}</Text>
        {lists.map(function(item,index){
          if (item.boardId == props.boardId){
            console.log("ITEM ID: ", item.boardId, props.boardId, item);
            toShow.push(item);

          }
        })}
        <ListLists lists={toShow}/>
      </ScrollView>

    )


  }

};

export default Lists;
