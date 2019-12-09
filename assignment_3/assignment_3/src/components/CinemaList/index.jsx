import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const CinemaList = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Cinemas
      </Text>
      <FlatList
        numColumns={2}
        data={props.cinema.sort((a, b) => a.name.localeCompare(b.name))}
        style={styles.flatList}
        renderItem={({
          item: {
            id, name, website,
          },
        }) => (
          <TouchableOpacity style={styles.cinema}>
            <Text style={styles.cinemaName}>{name}</Text>
            <Text style={styles.cinemaWebsite}>{website}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};


const mapStateToProps = (reduxStoreState) => {
  // console.log("all the stuff: ", reduxStoreState.cinema)
  return {
    counter: 'sdflsaldf',
    cinema: reduxStoreState.cinema
  }
};



export default connect(mapStateToProps)(CinemaList);
