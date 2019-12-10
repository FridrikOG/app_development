import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/Cinemas';
import Main from '../views/Main';
import UpcomingMovies from '../views/UpcomingMovies';
import CinemaDetails from '../views/CinemaDetails';

const StackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
  UpcomingMovies,
});

export default createAppContainer(StackNavigator);
