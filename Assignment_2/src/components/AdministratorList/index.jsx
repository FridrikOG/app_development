import React from 'react';
import {Image,View,Text, FlatList, TouchableOpacity } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';


const AdministratorList = ({ administrators}) => {
    return (
      <View style={styles.container}>
        <Text style = {styles.type} > Administrator view </Text>
        <FlatList
          numColumns = {1}
          data={administrators}
          renderItem={( {item: {name, id, email, photo }}) => {
            return (
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
                <Image
                  style={{width:100,height:100, alignSelf:'center'}}
                  resizeMode="cover"
                  source={{uri:photo}}
                  margin={15}/>
              </View>
            )
          }
        }
        keyExtractor={ (administrators) => administrators.id }/>
      </View>
    )
}
export default AdministratorList;
