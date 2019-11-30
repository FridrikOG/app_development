import React from 'react';
import {
 ScrollView, View, Text, Image, FlatList, TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import data from '../../resources/data.json';
import CreateTask from '../CreateTask';
import PropTypes from 'prop-types';
import checkmark from '../../resources/select2.png';

class ListLists extends React.Component{
  state = {
    isTaskOpen: false,
    currentTasks: [],
    allTasks: data.tasks,
    currentListId: '',
    isOpenTaskModal: false
  }

  creatingAnewTask = () => {
    console.log("creating a new task!!!");
    const { isOpenTaskModal } = this.state;
    this.setState({ isOpenTaskModal: true});
  }

  correspondingTasks = (id) => {
    const { currentTasks, allTasks, currentListId} = this.state;
    this.setState({currentListId: ''});
    this.setState({currentListId: id});
    toSendTasks =[];
    { allTasks.map(function(item){
      if(item.listId == id){
        toSendTasks.push(item);
      }
    })}
    this.setState({currentTasks: toSendTasks, isTaskOpen: true});

  }
  addTask = (info) => {
    console.log("in addtask in listlists");
    const { currentTasks, currentListId } = this.state;
    newTask = {
      "id": info.maxId,
      "name": info.name,
      "description": info.description,
      "finished": info.finished,
      "listId": currentListId
    }
    this.setState({currentTasks: [ ...currentTasks, newTask],isOpenTaskModal:false});
  }
  render(){
    const { lists, onLongPress, selectedIds, props } = this.props;
    const { isTaskOpen, currentTasks, isOpenTaskModal } = this.state;
    console.log(isOpenTaskModal);
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
                onPress={() => props.navigation.navigate('Tasks', {listId: id, lists:lists})}>
                <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }]}>
                  <View style={[styles.text, {backgroundColor: 'white', borderColor: color}]}>
                    {isSelected ? <Image source={checkmark} style={styles.selectIcon} name = "checkcircleo"/> : <></>}
                    <Text style={{flexDirection:'row'}}>
                      <Text style={styles.listtitle}>
                        List:
                        {' '}
                      </Text>
                      <Text style={styles.listvalue}>
                        {id}
                      </Text>
                    </Text>
                    <Text style={{flexDirection:'row'}}>
                      <Text style={styles.listtitle}>
                        Name:
                        {' '}
                      </Text>
                      <Text style={styles.listvalue}>
                        {name}
                      </Text>
                    </Text>
                    <Text style={{flexDirection:'row'}}>
                      <Text style={styles.listtitle}>
                        Color code:
                        {' '}
                      </Text>
                      <Text style={styles.listvalue}>
                        Color code:
                        {' '}
                        {color}
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
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
