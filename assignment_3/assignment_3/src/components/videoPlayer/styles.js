import { StyleSheet, Platform } from 'react-native';
import {
  white, blue, orange, lightorange, black, darkorange, lightblue,
} from '../../styles/colors';


export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 500,
    height: 500,
  },
  WebViewContainer: {
    flex: 1,
    marginTop: (Platform.OS === 'android') ? 20 : 0,
  },
  video: {
    margin: 15,
  },
  closeBtn: {
    padding: 10,
    backgroundColor: black,
    borderRadius: 12,
    borderColor: blue,
    borderWidth: 2,
    flexDirection: 'row',
  },
  closeText: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  }
});
