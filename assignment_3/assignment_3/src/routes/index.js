import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '.././views/Cinemas';
import Main from '../views/Main';
import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas,
  UpcomingMovies,
  Main,
});

export default createAppContainer(StackNavigator);
