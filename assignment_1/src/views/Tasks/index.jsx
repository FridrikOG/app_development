import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data';
import TaskList from '../../components/TaskList';
import CreateTask from '../../components/CreateTask';

class Tasks extends React.Component{
  state = {
    tasks: data.tasks,
    selectedIds: [],
    isOpenTaskModal: false,
  }
  addTask = (info) => {
    const { tasks, isOpenTaskModal } = this.state;
    console.log(info);
    this.setState({ tasks: [ ...tasks, info ], isOpenTaskModal: false });

  }
  // id = TaskId
  onTaskLongPress(id){
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

  removeSelectedTasks(){
    const {selectedIds,tasks} = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      tasks: tasks.filter(task => selectedIds.indexOf(task.id) == -1),
      selectedImages: [],
    })}

  // This one should display a caption whenever someone selects a board
  // How this one also shows if it should be plural or not
  displayCaption() {
    const { selectedIds } = this.state
    if (selectedIds.length === 0) { return;}

    let itemCaption = 'tasks';
    if (selectedIds.length === 1) {
      itemCaption = 'task';
    }
    return <Text>You have {selectedIds.length} selected {itemCaption} </Text>
}

  render(){
    // Fetching the listId to only display the tasks in the list we clicked on

    const listId = this.props.navigation.state.params.listId;
    const {props} = this.props;
    const {tasks,selectedIds, isOpenTaskModal} = this.state;
    const toShow = []
    return(
      <ScrollView>
        <Toolbar
        onAdd={() => this.setState({isOpenTaskModal:true})}
        hasSelectedIds = {selectedIds.length > 0}
        onRemove={() => this.removeSelectedTasks()}
        canModify = {!(selectedIds.length == 0 || selectedIds.length > 1)}/>
        {/* You have selected x task/s*/}
        {this.displayCaption()}
        {tasks.map(function(item,index){
          if (item.listId == listId){
            toShow.push(item);}})}

        <TaskList
        tasks={toShow}
        props={props}
        onLongPress= {(taskId) => this.onTaskLongPress(taskId)}
        selectedIds= {selectedIds}/>

        <CreateTask
          isOpen={isOpenTaskModal}
          closeModal={() => this.setState({isOpenTaskModal: false})}
          addTask={(info) => this.addTask(info)}
          listId={listId}
        />
      </ScrollView>
    )
  }
}
export default Tasks;
