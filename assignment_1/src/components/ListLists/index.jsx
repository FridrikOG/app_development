/* eslint-disable arrow-parens */
import React from 'react';
import {
 ScrollView, View, Text, FlatList, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import PropTypes from 'prop-types';

class ListLists extends React.Component{
  state ={
    isTaskOpen: false,
    currentTasks: [],
    allTasks: data.tasks,
    currentListId: '',
  }
  correspondingTasks = (id) => {

    const { currentTasks, allTasks, currentListId} = this.state;
    this.setState({currentListId: ''});
    this.setState({currentListId: id});
    console.log("UPDATED ID IN LISTS",this.state.currentListId);
    toSendTasks =[];
    { allTasks.map(function(item){
      if(item.listId == id){
        toSendTasks.push(item);
      }
    })}
    this.setState({currentTasks: [ toSendTasks ], isTaskOpen: true});

  }
  addTask = (info) => {
    const { currentTasks } = this.state;
    this.setState({currentTasks: [ ...currentTasks, info]});
    console.log("called add in lists");
  }
  render(){
    const { lists, onLongPress, selectedIds, props } = this.props;
    const { isTaskOpen, currentTasks } = this.state;
    return(
      <ScrollView style={styles.listContainer}>

        <FlatList
          numColumns={1}
          data={lists}
          extraData={selectedIds}
          renderItem={({ item: { id, name, color } }) => {
            const isSelected = selectedIds.indexOf(id) !== -1;
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onLongPress={() => onLongPress(id)}
                onPress={() => this.correspondingTasks(id)}>
                {isSelected ? <AntDesign name = "checkcircleo"/> : <></>}
                <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }]}>
                  <Text style={[styles.text, { backgroundColor: color }]}>
                  List: {id} {'\n'}
                  Name: {name} {'\n'}
                  Color code: {color} {'\n'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
        <TaskList
          isOpen={isTaskOpen}
          closeModal={() => this.setState({isTaskOpen: false})}
          tasks={this.state.currentTasks}
          currentListId={this.state.currentListId}
        />
      </ScrollView>
    )
  }

}

ListLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
  })).isRequired,
  ongLongPress: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.number).isRequired
}


export default ListLists;
