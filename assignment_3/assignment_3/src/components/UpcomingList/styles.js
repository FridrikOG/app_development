import { StyleSheet } from 'react-native';
import {
  white, blue, lightorange, black, darkorange,
} from '../../styles/colors';

export default StyleSheet.create({
  type: {
    width: '100%',
    fontSize: 20,
    padding: 10,
    backgroundColor: blue,
    color: black,
    fontWeight: 'bold',
  },
  movie: {
    flexDirection: 'column',
    width: 170,
    height: 300,
    alignItems: 'center',
    borderColor: white,
    backgroundColor: white,
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
    fontSize: 15,
    width: '100%',
    fontWeight: 'bold',
    color: black,
    borderBottomWidth: 3,
    backgroundColor: lightorange,
    borderColor: darkorange,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  year: {
    padding: 10,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 120,
    height: 120,
  },
  imageWrapper: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  trailerButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: white,
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
