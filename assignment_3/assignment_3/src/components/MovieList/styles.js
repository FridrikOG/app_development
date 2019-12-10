import { StyleSheet } from 'react-native';
import {
  white, blue, orange, lightorange, black, darkorange, lightblue
} from '../../styles/colors';

export default StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  title: {
    width: '100%',
    fontSize: 20,
    padding: 10,
    backgroundColor: lightblue,
    borderBottomWidth: 5,
    borderColor: blue,
    color: black,
  },
  flatList: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  movie: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
  },
  details: {
    flexDirection: 'column',
  },
});
