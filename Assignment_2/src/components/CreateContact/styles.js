import {
  StyleSheet, Dimensions,
} from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',

  },
  body: {
    flex: 1,
    flexGrow: 0.3,
    borderRadius: 10,
    width: winWidth - 100,
    backgroundColor: 'black',
    padding: 40,
  },
  container: {
    padding: 40,
    backgroundColor: 'white',
    width: winWidth - 50,

  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  textInput: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    padding: 15,
    marginBottom: 10,
  },
  colorText: {
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  button: {
    height: 50,
    width: 110,
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12,
  },
  btntxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  switch: {
    alignItems: 'flex-start',
    borderWidth: 1,
  },
});
