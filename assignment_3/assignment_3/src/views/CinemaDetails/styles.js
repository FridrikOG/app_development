import { StyleSheet } from 'react-native';
import {
  blue,
} from '../../styles/colors';

export default StyleSheet.create({
  cinemaInfo: {
    padding: 15,
    borderRadius: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: blue,
    marginBottom: 10,
  },
});
