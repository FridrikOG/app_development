import {StyleSheet} from 'react-native';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex:1,
    padding:30,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: lightestblue,
  },
  title: {
    fontSize: 40,

  },
  paragraph:{
    textAlign: 'center',
    color: 'black',
  },
  button: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    //width:120,
    height:65,
    backgroundColor: blue,
    borderRadius: 12,
    //borderColor: 'white',
    //borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontSize:20,
  },
  logo: {
    width: 250,
    height: 250,
  }

});
