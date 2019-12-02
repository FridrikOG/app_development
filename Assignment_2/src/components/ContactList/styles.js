import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {

  },
  title: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    width: winWidth,
  },
  flatlist: {
    width: winWidth,
    padding: 20,
  },
  contact: {
    paddingTop: 15,
    flex: 2,
    marginBottom: 20,
    width: 200,
    borderLeftWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
  },
  name: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: 'white',
  },
  image: {
    borderRadius: 200 / 2,
  },
});
