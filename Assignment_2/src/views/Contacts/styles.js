import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: '#009999',
  },
  content: {
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#00141a',
    width: winWidth,
  },
  title: {
    fontSize: 25,
    width: winWidth / 2,
    marginLeft: 10,
    marginTop: 5,
    color: 'white',
  },
  createBtn: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#e6f2ff',
    borderRadius: 12,
    width: winWidth / 2,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  plus: {
    width: 20,
    height: 20,
    marginTop: 3,
  },
  createText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
