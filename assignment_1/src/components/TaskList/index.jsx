import React from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, props, onLongPress, selectedIds }) => {
    console.log("Tasks:",tasks);

    console.log(selectedIds);
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
                    {isSelected ? <AntDesign name = "checkcircleo"/> : <></>}
                    <View style= {styles.container}>
                        <View style={{opacity: isSelected ? 0.5 : 1 }} >
                            <Text style={styles.task}>
                              <Text style={styles.tasktitle}>Task:</Text> {id} {"\n"}{"\n"}
                              <Text style={styles.tasktitle}>Name:</Text> {name} {"\n"}{"\n"}
                              <Text style={styles.tasktitle}>Description:</Text> {description} {"\n"}{"\n"}
                              <Text style={styles.tasktitle}>Finished:</Text> {isFinished} {"\n"}{"\n"}
                              <Text style={styles.tasktitle}>List Id:</Text> {listId}
                            </Text>
                            <Text style={styles.isSelected}> {isSelected ? 'Selected' : 'Not selected'}</Text>
                        </View>
                </View>
                </TouchableOpacity>
              )}}
            keyExtractor={ (task) => tasks.id }/>
        </View>
    )
}
export default TaskList;
