import {StyleSheet} from 'react-native';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex:1,
    padding:30,
    backgroundColor:lightestblue,
    alignItems:'center',
  },
  type:{
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color:blue,
    borderRadius:12,
    padding:10,
    marginBottom:15,
  },
  name: {
    fontSize:20,
    color:blue,
    fontWeight:'bold',
    textAlign:'center',
  },
  email: {
    fontSize:20,
    textAlign:'center',
  }
});
