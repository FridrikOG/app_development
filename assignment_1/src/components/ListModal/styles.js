import { StyleSheet, Dimensions} from 'react-native';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.3,
    borderRadius: 10,
    width: winWidth - 100,
    backgroundColor: 'white',
    padding: 40,
  },
  container: {
    padding:40,
    backgroundColor:'white',
    width: winWidth - 50,

  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: blue,
  },
  textInput: {
    height:40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 10,
  },
  colorText: {
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  pickerText: {
    fontWeight: 'bold',
    padding: 5,
  },
  picker: {
    backgroundColor: babyblue,
    marginBottom:15,
  },


});
