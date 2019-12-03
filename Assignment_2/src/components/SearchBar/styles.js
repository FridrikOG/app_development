import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    width: winWidth,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 5,
  },
});
