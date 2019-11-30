import { StyleSheet } from 'react-native';
import {
  blue, babyblue,
} from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  title: {
    height: 50,
    fontSize: 20,
    padding: 10,
    backgroundColor: babyblue,
  },
  text: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 15,
    margin: 15,
    padding: 20,
  },
  finished: {
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 12,
    fontSize: 15,
    margin: 15,
    padding: 20,
  },

  lists: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'red',
  },
  listsContainer: {
    borderColor: 'red',
  },
  caption: {
    padding: 10,
    color: blue,
  },
});
