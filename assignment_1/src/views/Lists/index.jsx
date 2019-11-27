import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';;
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';
import ListInputComponent from '../../components/Inputs/ListInputComponent'
const boardsList = data.lists;
/*
const Lists = (boardId) => (
  <View>
    <Toolbar />
    <Text style={{ padding: 100, textAlign: 'center' }}>
        You're in our list...
      { boardsList.map(function(item,index) {
        if (item.boardId == boardId.navigation.state.params.boardId){
        return ( <Text style={styles.lists, {backgroundColor:  item.color}}> Item ID: {item.id} Name: {item.name} 
        color code: {item.color} boardId: {item.boardId}</Text>
        )
      }
      }
      )
    }
    </Text>
  </View>
);
*/
class Lists extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View>
        <Toolbar />
        <Text style={{ padding: 100, textAlign: 'center' }}>
            You're in our list...
            console.log(props):
          { boardsList.map(function(item,index) {
            if (item.boardId == this.props.boardId){
            return ( <Text style={styles.lists, {backgroundColor:  item.color}}> Item ID: {item.id} Name: {item.name} 
            color code: {item.color} boardId: {item.boardId}</Text>
            )}})
          }
        </Text>
      </View>
    )
  }
};



export default Lists;