import { StyleSheet } from 'react-native';
import {
  white, blue, lightorange, darkorange, lightblue,
} from '../../styles/colors';

export default StyleSheet.create({
  container: {

  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flexDirection: 'column',
    margin: 20,
    backgroundColor: white,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: darkorange,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 280,
    alignSelf: 'center',
    marginTop: 20,
  },
  bolding: {
    fontWeight: 'bold',
    color: 'black',
  },
  flatList: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
  },
  time: {
    backgroundColor: lightblue,
    borderColor: blue,
    borderWidth: 2,
    padding: 10,
    marginRight: 8,
    marginBottom: 10,
  },
  timeText: {
    textAlign: 'center',
  },
  purchase: {
    backgroundColor: lightorange,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 10,
    paddingBottom: 5,
    color: '#404040',
    textAlign: 'justify',
  },
});
