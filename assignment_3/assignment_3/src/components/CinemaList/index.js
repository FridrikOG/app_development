import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const CinemaList = props => {
  return (
	<ScrollView style={styles.container}>
	<FlatList
	  numColumns={1}
	  data={props.cinema.sort((a, b) => a.name.localeCompare(b.name))}
	  renderItem={({
		item: {
		  id, name, website
		},
	  }) => (
		 <Text> {id} {name} {website} </Text>
	  )}
	/>
  </ScrollView>
  );
};


const mapStateToProps = (reduxStoreState) => {
	console.log("all the stuff: ", reduxStoreState.cinema)
	return {
		counter: "sdflsaldf",	
		cinema: reduxStoreState.cinema
	}
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});

export default connect(mapStateToProps)(CinemaList);
