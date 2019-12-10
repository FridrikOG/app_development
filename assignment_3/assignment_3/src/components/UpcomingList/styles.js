import { StyleSheet, Dimensions } from 'react-native';
import {
  white, blue, orange, lightorange, black, darkorange
} from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  type: {
    width: '100%',
    fontSize: 30,
    padding: 10,
    backgroundColor: blue,
    color: black,
  },
  movie: {
    flexDirection: 'column',
    width: 170,
    height: 300,
    alignItems: 'center',
    borderColor: white,
    backgroundColor: orange,
    paddingBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    margin: 5,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    width: '100%',
    backgroundColor: darkorange,
    color: white,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  year: {
    padding:10,
    backgroundColor: lightorange,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  imageWrapper: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 12,
  },
  trailerButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    borderColor: '#00cccc',
  },
});
