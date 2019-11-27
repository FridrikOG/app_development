import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';

/*
const getBoards = ({ navigation: { navigate } }) => (

      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        { boardsList.map(function(item,index){ 

          return(
            <TouchableHighlight style={styles.button} onPress={() => {navigate('Lists', {boardId: item.id, title: item.title})}}>
            <View style={styles.board}>
              <ImageThumbnail file={item.thumbnailPhoto}/>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            </TouchableHighlight>
          )}
        )}
      </ScrollView>
);
*/

class Boards extends React.Component {
  onBoardLongPress(name) {
  }

  render() {
    const props = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.type}>Board List</Text>
        {data.boards.map(function(item,index){ 
          return(
            <BoardList images={item.thumbnailPhoto} name={item.name} description={item.description} navigate={props.navigation.navigate}/>
          )}
        )}
      </ScrollView> 
    )
  }
};

export default Boards;
