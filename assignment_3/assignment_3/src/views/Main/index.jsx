/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, ImageBackground,
} from 'react-native';
import bg from '../../resources/images/bg.png';
import styles from './styles';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCinema } from '../../actions/cinemaActions';
import { updateMovie } from '../../actions/movieActions';
import { updateUpcomingMovies } from '../../actions/upcomingMoviesAction';



class Main extends React.Component {

  state = {
    buttonAvail: false,
    // Here we have all the cinemas from the API
    cinema: {},
    // Here we have all the movies from the API
    movies: {},
    // Here we have all the upcoming movies from the API
    upcomingMovies: {},
  }

  // Gets all the cinemas from the API
  async getCinemas(token) {
    // For some reason you have to send the token this way, can't send it in the url
    const url = 'http://api.kvikmyndir.is/theaters'
    const test = await axios.get(url, {headers: {'x-access-token' : token}})
    return test;
  }
  // Gets all the movies from the API
  async getMovies(token) {
    const url = 'http://api.kvikmyndir.is/movies'
    const movies = await axios.get(url, {headers: {'x-access-token' : token}})
    return movies;
  }
  async getUpcomingMovies(token){
    const url = 'http://api.kvikmyndir.is/upcoming'
    const upcomingMovies = await axios.get(url, {headers: {'x-access-token' : token}})
    // Making sure the button isn't available until the data has been loaded
    this.setState( {buttonAvail: true})
    return upcomingMovies;
  }


  // Here we send a request everytime the app is opened so we can authenticate ourselves
  // The token is active 24 hours
  async getAuthentication() {
    const promise = await axios.post('http://api.kvikmyndir.is/authenticate', { username: 'johann', password: 'johann123' });
    return promise.data.token;
  }

  async componentDidMount() {
    const { updateCinema, updateMovie, updateUpcomingMovies } = this.props;
    const token = await this.getAuthentication();
    // Updating the cinema dictionary with updated cinemas
    const cinemas = await this.getCinemas(token);
    updateCinema(cinemas.data);
    // Doing the same for movies
    const movies = await this.getMovies(token);
    updateMovie(movies.data);
    // Doing the same for upcoming movies
    const upcomingMovies = await this.getUpcomingMovies(token);
    updateUpcomingMovies(upcomingMovies.data)

  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { buttonAvail } = this.state
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={bg} resizeMode="repeat">
          <Text style={styles.title}>SOFRITO</Text>
          <TouchableOpacity disabled={!buttonAvail} style={styles.button} onPress={() => navigate('Cinemas')}>
            <Text  style={styles.buttonText} >VIEW CINEMAS</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { updateCinema, updateMovie, updateUpcomingMovies })(Main); // returns a connected component