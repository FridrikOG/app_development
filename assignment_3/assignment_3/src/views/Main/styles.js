import { StyleSheet } from 'react-native';
import {
  blue, orange, black, darkorange,
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#009999',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: black,
    backgroundColor: blue,
    width: '100%',
    textAlign: 'center',
  },
  logo: {
    paddingLeft: 20,
    width: 30,
    height: 30,
  },
  logoBorder: {
    borderWidth: 6,
    borderRadius: 400 / 2,
    borderColor: 'white',
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  button: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: darkorange,
    padding: 20,
    backgroundColor: orange,
    margin: 20,
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 20,
    color: black,
  },
});
