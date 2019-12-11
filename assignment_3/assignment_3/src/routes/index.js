import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import Main from '../views/Main';
import UpcomingMovies from '../views/UpcomingMovies';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';

const StackNavigator = createStackNavigator({
  UpcomingMovies,
  Main,
  Cinemas,
  CinemaDetails,
  MovieDetails,
});

export default createAppContainer(StackNavigator);
