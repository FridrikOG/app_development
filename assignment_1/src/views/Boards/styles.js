import { StyleSheet } from 'react-native';
import {
 blue, lightyellow, babyblue, lightestblue
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: lightestblue,

  },
  type: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    padding:10,
    backgroundColor:babyblue,
  }
});
