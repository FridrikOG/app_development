import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';


class Boards extends React.Component {
  
  state = {
    // All images within the application directory
    ids: [],
    // All selected images
    selectedIds: [],
}
    
    onBoardLongPress(boardId) {
      console.log("sPRINTING here: ", boardId)

    }
    
  render() {
    //console.log("LOGGING DATA BOARDS: ", data.boards)
    const props = this.props;
    console.log("LOGGING: ", this.props)
    return (
      <View style = {{ flex: 1}}>
        <Toolbar/> 
        
        
        <BoardList boards={ data.boards } props={props} onLongPress={(boardId) => this.onBoardLongPress(id)} />
        
      </View>
    )
  }
};
    export default Boards;
/*
      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        <Toolbar/>
        {data.boards.map(function(item,index){
          onBoardLongPress = (id) => {
            console.log("THIS IS A LONG ONE");
            this.handler(id);
          };
          console.log("ID in BOARDS: ",item.id);
          return(
            <TouchableOpacity
            onPress={() => {this.onBoardLongPress(item.id)}}
            onLongPress={() => {props.navigation.navigate('Lists',{boardId: props.boardId, name: props.name})}}
            style={styles.button}>
              <BoardList boardId={item.id} images={item.thumbnailPhoto} name={item.name} description={item.description} navigate={props.navigation.navigate}/>
            </TouchableOpacity>
          )}
        )}

      </ScrollView>
*/
  





/*
FUNCTION TO DO BOARD PRESS VERY NICELY WRITTEN WITH NULL
onBoardPress(id){
    const {selectedIds} = this.state;
    
    
    if (selectedIds.includes(id) == false){
      console.log("Not there")
      selectedIds.push(id)
    } else{
      console.log('is there')
      let indexId = selectedIds.indexOf(id)
      selectedIds[indexId] = null 
      //this.setState({selectedIds: selectedIds.filter(x => x !== id)})
      }
      console.log("LOGGING ARRAY: ",selectedIds)
    }
    */
