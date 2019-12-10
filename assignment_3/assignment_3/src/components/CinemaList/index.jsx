import React from 'react';
import {
  View, Text, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import pop from '../../resources/images/box-of-popcorn.png';
import bg from '../../resources/images/movie-film.png';


const CinemaList = (props) => {
  // console.log("logging props ", props)
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
          <TouchableOpacity style={styles.cinema} onPress={() => props.navigate('CinemaDetails', { cinemaId: id })}>
            <ImageBackground style={styles.backgroundImage} source={bg}>
              <Text style={styles.cinemaName}>
                {name}
              </Text>
              <Text style={styles.cinemaWebsite}>{website}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};
// onPress={() => props.navigate('CinemaDetails', { cinemaId: id })}

const mapStateToProps = (reduxStoreState) => {
  return {
    cinema: reduxStoreState.cinema,
    movies: reduxStoreState.movies,
  }
};
export default connect(mapStateToProps)(CinemaList);
