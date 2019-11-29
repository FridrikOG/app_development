/* eslint-disable arrow-parens */
import React from 'react';
import {
 ScrollView, View, Text, FlatList, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';

class ListLists extends React.Component{
  state ={
    isTaskOpen: false,
    currentTasks: [],
    allTasks: data.tasks,
  }
  correspondingTasks = (id) => {
    const { currentTasks, allTasks } = this.state;
    console.log("TASKS", currentTasks);
    toSendTasks =[];
    { allTasks.map(function(item){
      if(item.listId == id){
        console.log("ONE ITEM",item);
        toSendTasks.push(item);
      }
    })}
    this.setState({currentTasks: [ ...currentTasks, toSendTasks ], isTaskOpen: true});

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
          tasks={currentTasks}
        />
      </ScrollView>
    )
  }

}


export default ListLists;
