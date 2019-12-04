import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({

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
  },
  createText: {
    marginLeft: 10,
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    paddingTop: 20,
  },
  name: {
    width: winWidth,
    fontSize: 30,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#00141a',
    textAlign: 'center',
    color: '#e6faff',
    opacity: 0.9,
  },
  phone: {
    width: winWidth,
    textAlign: 'center',
    backgroundColor: '#f0f5f5',
    fontSize: 15,
    color: 'gray',
    paddingTop: 15,
    paddingBottom: 5,
    opacity: 0.9,
  },
  phoneValue: {
    textAlign: 'center',
    width: winWidth,
    backgroundColor: '#f0f5f5',
    fontSize: 20,
    paddingBottom: 20,
    opacity: 0.9,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: Platform.OS === 'ios' ? 300 / 2 : 400 / 2,
    borderWidth: 10,
    borderColor: 'black',
  },
});
