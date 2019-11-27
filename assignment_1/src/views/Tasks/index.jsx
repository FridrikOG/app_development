
import React from 'react';
import { Dimensions, View, ImageBackground, Text, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';

const tasksList = data.tasks;

class Tasks extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <ScrollView>
          <Toolbar />
          <Text style={{ padding: 100, textAlign: 'center' }}>
              You're in our Tasks...
            { tasksList.map(function(item,index) {
                console.log(tasksList)
            if (item.listId == 1){
              return ( <Text > Item ID: {item.id} Name: {item.name} 
              color code: {item.color} boardId: {item.boardId}</Text>
              )}})
            }   
          </Text>
        </ScrollView>
      )
    }
  };

export default Tasks;