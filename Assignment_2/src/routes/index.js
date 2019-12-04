import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';
import Main from '../views/Main';
import Details from '../views/Details';


const StackNavigator = createStackNavigator({
  Contacts,
  Details,
  Main,
});

export default createAppContainer(StackNavigator);
