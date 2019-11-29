import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import leftArrow from '../../resources/left-arrow.png';
import plus from '../../resources/plus.png';
import CreateTask from '../CreateTask';
import data from '../../resources/data.json';

class TaskList extends React.Component {
    state = {
      isOpenTaskModal: false,
      tasksList: [],


    }
/*
var maxId = 0;
lists.map(function(obj){
  if (obj.id > maxId) maxId = obj.id;
});
// We get the highest id of any list
maxId += 1

*/
    booleanToString(b) {
      if( b == true){
        return 'Yes';
      }
      return 'No';
    }
    logprops(){
      console.log("PROPS IN TASKLIST",this.props);

    }
    addTask = (info) =>{
      const { tasks, currentListId } = this.props;
      const { tasksList } = this.state;

      this.setState
      this.props.tasks.push(info);


    }
    render() {
      const { isOpen, closeModal, tasks, currentListId} = this.props;
      const { isOpenTaskModal } = this.state;
      console.log("CURRENT LIST ID IN TASKS:",currentListId);
      this.logprops();
      return (
        <NativeModal
          isVisible={isOpen}
          hasBackdrop
          onBackButtonPress={closeModal}
          onSwipeComplete={['up','down']}
          style={styles.modal}>
          <View style={styles.container}>
            <Text style = {styles.type} > Task List </Text>
            <FlatList
                numColumns = {1}
                data={tasks[0]}
                renderItem={( {item: {id,name, description, isFinished,listId }}) => {
                    return(
                      <View>
                        <Text style={styles.task}>
                          Task: {id} {"\n"}
                          Name: {name} {"\n"}
                          Description: {description} {"\n"}
                          Finished: {this.booleanToString(isFinished)} {"\n"}
                          List Id: {listId} {"\n"}
                        </Text>
                      </View>
                  )}}
                keyExtractor={ (task) => tasks.id }/>
            <CreateTask
              isOpen={isOpenTaskModal}
              closeModal={() => this.setState({isOpenTaskModal:false})}
              addTask={(info) => this.addTask(info)}
              listId={currentListId}
            />
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.button} onPress={closeModal}><Image style={styles.icon} source={leftArrow} /></TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.setState({isOpenTaskModal: true})}><Image style={styles.icon} source={plus} /></TouchableOpacity>
            </View>

          </View>
        </NativeModal>
      )
    }
}
export default TaskList;
