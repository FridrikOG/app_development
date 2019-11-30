import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import checkmark from '../../resources/select2.png';

const TaskList = ({ tasks, props, onLongPress, selectedIds }) => {
  function toBool(finished){
    if(finished) {
      return 'Yes';
    }
    return 'No';
  }
  return (
    <View style={styles.container}>
    <Text style = {styles.type} > Task List </Text>
    <FlatList
        numColumns = {1}
        data={tasks}
        //extraData={selectedIds}
        renderItem={( {item: {id,name, description, isFinished,listId }}) => {
          const isSelected = selectedIds.indexOf(id) !== -1
          return(
            <TouchableOpacity
              activeOpacity={0.75}
              onLongPress={() => onLongPress(id)}>
              <View style= {styles.container}>
                <View style={{opacity: isSelected ? 0.5 : 1 }} >
                  <View style={styles.task}>
                    {isSelected ? <Image source={checkmark} style={styles.selectIcon} name = "checkcircleo"/> : <></>}
                    <View style={{flexDirection:'row', borderBottomWidth:2,borderColor:'#f2f2f2'}}>
                      <View style={styles.square}>
                        <Text style={styles.tasktitle}>
                          Task:
                        </Text>
                        <Text>
                        {id}
                        </Text>
                      </View>
                      <View style={styles.square}>
                        <Text style={styles.tasktitle}>
                          Name:
                        </Text>
                        <Text>
                        {name}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'row',borderBottomWidth:2,borderColor:'#f2f2f2'}}>
                      <View style={styles.square}>
                        <Text style={styles.tasktitle}>
                          Description:
                        </Text>
                        <Text>
                        {description}
                        </Text>
                      </View>
                      <View style={styles.square}>
                        <Text style={styles.tasktitle}>
                        Finished:
                        </Text>
                        <Text>
                        {toBool(isFinished)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.isSelected}> {isSelected ? 'Selected' : 'Not selected'}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}}
        keyExtractor={ (task) => tasks.id }/>
    </View>
    )
}
export default TaskList;
