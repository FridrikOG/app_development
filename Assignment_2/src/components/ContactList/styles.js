import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {

  },
  flatlist: {
    width: winWidth,
    padding: 20,
  },
  contact: {
    paddingTop: 10,
    flex: 2,
    marginBottom: 20,
    width: 200,
    backgroundColor: 'black',
  },
  name: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: 'white',
  },
});
