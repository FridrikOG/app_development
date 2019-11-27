import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';;
import styles from './styles';
import getParameters from '../../components/Parameters/getParameters';
const boardsList = data.lists;

class Lists extends React.Component{
  render(){
    const props = this.props.navigation.state.params;
    console.log(props);
    console.log('ID in LISTS: ',props.boardId);
    return(
      <View>
        <Toolbar />
        <Text style={{ padding: 100, textAlign: 'center' }}>
            You're in our list...

          { boardsList.map(function(item,index) {
            if (item.boardId == props.boardId){
              return (
                <Text style={styles.lists, {backgroundColor:  item.color}}> Item ID: {item.id} Name: {item.name}
              color code: {item.color} boardId: {item.boardId}</Text>
              )
            }
          }
          )
        }
        </Text>
      </View>

    )


  }

};

export default Lists;
