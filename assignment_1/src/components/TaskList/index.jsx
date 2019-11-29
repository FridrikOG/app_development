import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import leftArrow from '../../resources/left-arrow.png';
import plus from '../../resources/plus.png';


class TaskList extends React.Component {
    state = {
      createModal: false,
    }

    booleanToString(b) {
      if( b == true){
        return 'Yes';
      }
      return 'No';
    }
    render() {
      const { isOpen, closeModal, tasks} = this.props;
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
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.button} onPress={closeModal}><Image style={styles.icon} source={leftArrow} /></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Image style={styles.icon} source={plus} /></TouchableOpacity>
            </View>
          </View>
        </NativeModal>
      )
    }
}
export default TaskList;
