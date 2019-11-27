import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import data from '../../resources/data';


const taskList= data.tasks

// This determines style depending on if the task is finished
function isFinished(isFinished){
    if (isFinished){
        return styles.finished;}
    return styles.unfinished
}

function newData(){
    return newTask = {
        "id": null,
        "name": "Rotterdam port",
        "description": "See the biggest shipping port in Europe!",
        "isFinished": false,
        "listId": 2
    }
}

class Tasks extends React.Component{


  render(){
    //const props = this.props.navigation.state.params;
    const listId = 1

    const newestTask = newData()



    return(
      <ScrollView>
        <Toolbar />
        <Text style={styles.title}>Currently in List: 1</Text>
          { taskList.map(function(item,index) {
              isFinished = () => {
                  isFinished()
              }
            if (item.listId == listId){
              return (
                <View style= {styles.container}>
                  <Text style={isFinished(item.isFinished)}>
                    Task: {item.id} {"\n"}
                    Name: {item.name} {"\n"}
                    Description: {item.description} {"\n"}
                    Finished: {item.isFinished} {"\n"}
                    List Id: {item.listId} {"\n"}
                  </Text>
                </View>
              )
            }
        }
          )
        }
      </ScrollView>

    )


  }

};

export default Tasks;
