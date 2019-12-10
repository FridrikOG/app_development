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
  backgroundImage: {
    width: 150,
    height: 100,
    justifyContent: 'center',
  },
  cinema: {
    width: 150,
    margin: 15,
    borderRadius: 12,
    // backgroundColor: white,
  },
  cinemaName: {
    width: '100%',
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    // fontSize: 20,
    textAlign: 'center',
    backgroundColor: white,
  },
  icon: {
    width: 20,
    height: 20,
  },
  cinemaWebsite: {
    width: '100%',
    marginBottom: 15,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: black,
    color: white,
  },
});
