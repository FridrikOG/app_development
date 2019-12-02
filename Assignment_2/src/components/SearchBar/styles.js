import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    width: winWidth,
    padding: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 5,
  },
});
