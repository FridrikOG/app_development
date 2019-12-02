import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Administrators from '../views/Administrators';
import Tasks from '../views/Tasks';

const StackNavigator = createStackNavigator({
  Main,
  Boards,
  Lists,
  Tasks,
  Administrators,
});

export default createAppContainer(StackNavigator);
