import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Administrators from '../views/Administrators';

const StackNavigator = createStackNavigator({
  Boards,
  Main,
  Lists,
  Administrators,
});

export default createAppContainer(StackNavigator);
