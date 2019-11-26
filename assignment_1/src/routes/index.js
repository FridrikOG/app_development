import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';


const StackNavigator = createStackNavigator({
  Boards,
  Main,
});

export default createAppContainer(StackNavigator);
