import { StyleSheet } from 'react-native';
import {
  blue, lightyellow,
} from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  title: {
    backgroundColor: lightyellow,
    padding: 20,
    fontSize: 20,
  },
  selectIcon: {
    borderWidth: 2,
    borderColor: blue,
    borderRadius: 22,
    width: 20,
    height: 20,
    marginBottom: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 15,
    margin: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  listtitle: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  listvalue: {

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
