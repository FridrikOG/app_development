import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '.././views/Cinemas';
import Main from '../views/Main';
import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  UpcomingMovies,
  Main,
  Cinemas,
});

export default createAppContainer(StackNavigator);
