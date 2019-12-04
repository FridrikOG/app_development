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
    padding: 20,
    flex: 3,
    borderBottomWidth: 2,
    borderColor: 'white',
    backgroundColor: 'black',
    flexDirection: 'row',
    opacity: 0.9,
  },
  image: {
    alignSelf: 'flex-start',
  },
  name: {
    width: 150,
    marginLeft: 20,
    alignSelf: 'center',
    color: 'white',
  },
  iconBorder: {
    width: 40,
    height: 40,
    marginTop: 10,
    paddingTop: 7,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#009999',
    alignItems: 'center',

  },
  callIcon: {
    width: 20,
    height: 20,
  },
  deleteButton: {
    backgroundColor: '#009999',
    padding: 10,
    flexDirection: 'row',
    color: 'white',
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  deleteText: {
    color: 'white',
  }
});
