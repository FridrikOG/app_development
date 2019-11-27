import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import Lists from '../views/Lists';


const StackNavigator = createStackNavigator({
  Boards,
  Lists,
  Main,
});

export default createAppContainer(StackNavigator);
