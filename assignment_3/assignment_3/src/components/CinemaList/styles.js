import { StyleSheet } from 'react-native';
import {
  white, darkblue, midblue, darkerwhite,
} from '../../styles/colors';

export default StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  title: {
    width: '100%',
    fontSize: 30,
    padding: 10,
    backgroundColor: darkblue,
    color: white,
  },
  flatList: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',

  },
  cinema: {
    width: 150,
    margin: 15,
    borderRadius: 12,
    backgroundColor: darkerwhite,
  },
  cinemaName: {
    backgroundColor: darkblue,
    color: white,
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  cinemaWebsite: {
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
});
