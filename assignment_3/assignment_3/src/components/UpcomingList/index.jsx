/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import VideoModal from '../VideoPlayer';
import { Video } from 'expo-av';



class UpcomingList extends React.Component {
  state = {
    upMovies: [],
    videoOpen: false,
    currentTrailer: '',
  };

  // Some movies do not have trailers
  hasTrailer(trailers){
    // If it is undefined
    if (trailers[0] === undefined) {
      return false;
    }
    if (trailers[0].results[0] === undefined) {
      return false;
    }
    return true;
  }
  // getTrailer(trailers){
  //   if(this.hasTrailer(trailers)) {
  //     this.setState({currentTrailer: trailers[0].results[0].url, videoOpen: true});
  //   }
  // }

  render() {
    const { videoOpen, currentTrailer } = this.state;
    return (
      <View>
        <Text style={styles.type}>
          Upcoming Movies
        </Text>
        <FlatList
          numColumns={2}
          data={this.props.upcomingMovies}
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
                style={[styles.trailerButton, (this.hasTrailer(trailers) ? {} : { opacity: 0.3 })]}
                onPress={() => this.setState({currentTrailer: trailers[0].results[0].url, videoOpen: true})}
                disabled={!(this.hasTrailer(trailers))}
              >
                <Text>Watch Trailer</Text>
              </TouchableOpacity>
            </View>
          )}
          keyextractor={(item, id) => `${id}`}
        />
        <VideoModal isOpen={videoOpen} closeVideo={() => this.setState({videoOpen: false})} url={currentTrailer} />
      </View>
    );
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    cinema: reduxStoreState.cinema,
    upcomingMovies: reduxStoreState.upcomingMovies
  }
};

export default connect(mapStateToProps)(UpcomingList);
