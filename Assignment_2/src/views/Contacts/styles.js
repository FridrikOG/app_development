import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingBottom: 40,
  },
  content: {
    alignItems: 'center',
  },
  importBtn: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#009999',
    justifyContent: 'center',
    flexDirection: 'row',
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
    justifyContent: 'space-around',
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
    marginRight: 10,
    padding: 10,
    backgroundColor: '#d6f5f5',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
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
  importText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
});
