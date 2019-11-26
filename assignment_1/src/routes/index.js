import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';
import Board from '../views/Boards';


const stackNavigator = createStackNavigator({
  Main,
  Board,
});

export default createAppContainer(stackNavigator);
