import { StyleSheet, Platform } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: (Platform.OS === 'android') ? 20 : 0,
  },
  video: {
    margin: 15,
    width: 300,
    height: 200,
  }
});
