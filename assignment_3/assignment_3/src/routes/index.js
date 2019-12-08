import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '.././views/Cinemas';
import Main from '../views/Main';

const StackNavigator = createStackNavigator({
  Main,
  Cinemas,
});

export default createAppContainer(StackNavigator);
