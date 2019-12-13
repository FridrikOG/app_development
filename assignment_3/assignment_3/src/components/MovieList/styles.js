import { StyleSheet } from 'react-native';
import {
  orange, black, darkorange,
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
    paddingTop: 10,
    backgroundColor: black,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: black,
    color: orange,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  movie: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: darkorange,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 150,
  },
  details: {
    width: 200,
    margin: 15,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  genres: {
    marginTop: 10,
  },
});
