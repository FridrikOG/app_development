/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

// Some movies do not have trailers
const hasTrailer = (trailers) => {
  // If it is undefined
  if (trailers[0] === undefined) {
    return false;
  }
  return true;
}

const UpcomingList = (props) => {
  return (
    <View>
      <Text style={styles.type}>
        Upcoming Movies
      </Text>
      <FlatList
        numColumns={2}
        data={props.moviesData}
        renderItem={({
          item: {
            id, poster, title, year, trailers,
          },
        }) => (
          <View style={styles.movie}>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{ uri: poster }} />
            </View>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.year}>
              Release Date:
              {year}
            </Text>
            <TouchableOpacity
              style={[styles.trailerButton, (hasTrailer(trailers) ? {} : { opacity: 0.3 })]}
              onPress={() => console.log(!(hasTrailer(trailers)))}
              disabled={!(hasTrailer(trailers))}
            >
              <Text>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
        )}
        keyextractor={(item, id) => `${id}`}
      />
    </View>
  );
}

const mapStateToProps = (reduxStoreState) => {
  // console.log("all the stuff: ", reduxStoreState.cinema)
  return {
    counter: 'sdflsaldf',
    cinema: reduxStoreState.cinema
  }
};

export default connect(mapStateToProps)(UpcomingList);
