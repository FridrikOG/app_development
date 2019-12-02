import { StyleSheet } from 'react-native';
import { lightyellow } from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  title: {
    backgroundColor: lightyellow,
    padding: 20,
    fontSize: 20,
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
});
