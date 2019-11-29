import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightestblue,

  },
  container: {
    margin:20,

  },
  type: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  task: {
    padding:15,
    fontSize: 15,
    backgroundColor: 'white',
    marginTop:15,
    borderRadius:12,
  },
  button:{
    backgroundColor:blue,
    borderWidth:1,
    borderColor: blue,
    borderRadius:12,
    margin:10,
    padding:10,

  },
  btntxt: {
    fontSize:20,
    color: 'white',
  },
  icon: {
    width:30,
    height:30,
  }

});
