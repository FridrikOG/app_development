import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';
import Board from '../views/Boards';


const StackNavigator = createStackNavigator({
  Main,
  Board,
});

export default createAppContainer(StackNavigator);
