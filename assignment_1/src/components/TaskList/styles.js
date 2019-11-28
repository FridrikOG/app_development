import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  title: {
    backgroundColor: lightyellow,
    padding:20,
    fontSize:20,
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
    borderColor: 'red'
  },
});
