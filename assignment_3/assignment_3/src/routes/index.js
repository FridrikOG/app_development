import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import Main from '../views/Main';
import UpcomingMovies from '../views/UpcomingMovies';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';

const StackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
  MovieDetails,
  UpcomingMovies,
});

export default createAppContainer(StackNavigator);
