/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import VideoModal from '../VideoPlayer';


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
  //get release date for each movie
  getReleaseDate(title) {
    let newArray = []
    let movies = this.props.upcomingMovies
    for (x in movies) {
      if (movies[x].title === title){
        return movies[x]['release-dateIS'];
      }
    }
  }

  render() {
    const { videoOpen, currentTrailer } = this.state;
    return (
      <View>
        <Text style={styles.type}>
          Upcoming Movies
        </Text>
        <FlatList
          numColumns={2}
          //ordering the upcoming movies
          data={this.props.upcomingMovies.sort((a,b) => b['release-dateIS'].localeCompare(a['release-dateIS'] ))}
          renderItem={({
            item: {
              poster, title, trailers,
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
                {this.getReleaseDate(title)}
              </Text>
              <TouchableOpacity
                //if there is no trailer the button will be disabled and it will look different
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
