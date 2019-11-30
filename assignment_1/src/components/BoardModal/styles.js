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
    fontSize: 25,
    textAlign:'center',
    marginBottom: 10,
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
    textAlignVertical: 'top',
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
    borderWidth: 1,
    marginBottom:15,
    fontSize:11,
  },
  button: {
    height: 50,
    width: 110,
    marginTop: 10,
    backgroundColor: blue,
    padding:10,
    marginRight:10,
    borderWidth:2,
    borderColor: 'white',
    borderRadius:12,
  },
  btntxt: {
    textAlign: 'center',
    color:'white',
    fontSize:20,
  },

});
