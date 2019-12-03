import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';
import Main from '../views/Main';


const StackNavigator = createStackNavigator({
  Main,
  Contacts,
});

export default createAppContainer(StackNavigator);
