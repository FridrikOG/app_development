import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';

class Lists extends React.Component{
  render(){
    const props = this.props.navigation.state.params;
    console.log(props);
    console.log('ID in LISTS: ',props.boardId);

    return(
      <ScrollView>
        <Toolbar />
        <Text style={styles.title}>Currently in Board: {props.boardId}</Text>
          { data.lists.map(function(item,index) {
            if (item.boardId == props.boardId){
              return (
                <View style={styles.container}>
                  <Text style={[styles.text, {backgroundColor:item.color}]}>
                    List: {item.id} {"\n"}
                    Name: {item.name} {"\n"}
                    Color code: {item.color} {"\n"}
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

export default Lists;
