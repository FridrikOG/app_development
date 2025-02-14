/* eslint-disable object-curly-spacing */
/* eslint-disable react/sort-comp */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data';
import TaskList from '../../components/TaskList';
import CreateTask from '../../components/CreateTask';
import ModifyTask from '../../components/CreateTask/ModifyTaskModal';
import styles from './styles';

// Class takes care of the tasks
class Tasks extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    tasks: data.tasks,
    selectedIds: [],
    isOpenTaskModal: false,
    isModifyOpen: false,
  }

  // Called from the create task modal
  addTask = (info) => {
    const { tasks } = this.state;
    this.setState({ tasks: [...tasks, info], isOpenTaskModal: false });
  }
  // Uses our selection system
  onTaskLongPress(id){
    const {selectedIds } = this.state;
    if (selectedIds.indexOf(id) !== -1) {
      // ID is already within the list
      this.setState({
        selectedIds: selectedIds.filter((x) => x !== id),
      });
    } else {
      // IDs need to be added
      this.setState({
        selectedIds: [...selectedIds, id],
      });
    }
  }

  // Called when remove is pressed, 
  removeSelectedTasks(){
    const {selectedIds,tasks} = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      tasks: tasks.filter((task) => selectedIds.indexOf(task.id) == -1),
      selectedIds: [],
    }); }

  // This one should display a caption whenever someone selects a board
  // How this one also shows if it should be plural or not
  displayCaption() {
    const { selectedIds } = this.state;
    if (selectedIds.length === 0) { return; }

    let itemCaption = 'tasks';
    if (selectedIds.length === 1) {
      itemCaption = 'task';
    }
    return <Text>You have {selectedIds.length} selected {itemCaption} </Text>;
}
  updateTask(info) {
    // const { tasks, isModifyOpen, lists } = this.props;
    const lists = this.props.navigation.state.params.lists;
    const { tasks, selectedIds } = this.state;

    const oldTask = tasks.filter((x) => x.id === selectedIds[0]);
    // Making sure if the name submitted is the old one then we fix it
    if (info.name == '') {
      info.name = oldTask[0].name;
    }
    if (info.description == '') {
      info.description = oldTask[0].description;
    }

    lists.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (lists) {
        if (lists.id === info.listId) {
          listId = info.listId;
        }
      });
        const newTask = {
          // eslint-disable-next-line quote-props
          'id': selectedIds[0],
          // eslint-disable-next-line quote-props
          'name': info.name,
          // eslint-disable-next-line quote-props
          'description': info.description,
          // eslint-disable-next-line quote-props
          'finished': info.finished,
          'listId': listId,
        };

        const newTasks = tasks.filter((task) => selectedIds.indexOf(task.id) === -1);
        this.setState({ tasks: [...newTasks, newTask], isModifyOpen: false, selectedIds: [] });
      }
    //const newLists = lists.filter((list) => selectedIds.indexOf(list.id) === -1);
    //this.setState({ lists: [...newLists, newList], isModifyModalOpen: false, selectedIds: [] });

  render(){
    // Fetching the listId to only display the tasks in the list we clicked on
    // uncomment this when you want to get the id from lists
    console.log(tasks);
    const listId = this.props.navigation.state.params.listId;
    const lists = this.props.navigation.state.params.lists;
    const {props} = this.props;
    const {
tasks,selectedIds, isOpenTaskModal,isModifyOpen,
} = this.state;
    const toShow = [];
    const listLists = [];
    lists.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (item) {
        listLists.push({ value: item.name });
      },
    );

    return (
      <ScrollView>
        <Toolbar
          onAdd={() => this.setState({isOpenTaskModal: true})}
          hasSelectedIds={selectedIds.length > 0}
          onRemove={() => this.removeSelectedTasks()}
          onModify={() => this.setState({isModifyOpen: true})}
          canModify={!(selectedIds.length == 0 || selectedIds.length > 1)}
        />
        {tasks.map(function(item){
          if (item.listId == listId){
            toShow.push(item); } })}
        <Text style={styles.currentlyIn}>Currently in list {listId}</Text>
        {/* You have selected x task/s*/}
        <Text style={styles.caption}>{this.displayCaption()}</Text>
        <TaskList
          tasks={toShow}
          props={props}
          onLongPress={(taskId) => this.onTaskLongPress(taskId)}
          selectedIds={selectedIds}
        />

        <CreateTask
          isOpen={isOpenTaskModal}
          closeModal={() => this.setState({isOpenTaskModal: false})}
          addTask={(info) => this.addTask(info)}
          listId={listId}
          lists={lists}

        />

        <ModifyTask
          isOpen={isModifyOpen}
          closeModal={() => this.setState({isModifyOpen: false})}
          addTask={(info) => this.updateTask(info)}
          listId={listId}
          listOptions={listLists}
          tasks={tasks}
          taskId={selectedIds[0]}

        />
      </ScrollView>
    );
  }
}
export default Tasks;
