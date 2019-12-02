import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';

const StackNavigator = createStackNavigator({
  Contacts
})

export default createAppContainer(StackNavigator);
