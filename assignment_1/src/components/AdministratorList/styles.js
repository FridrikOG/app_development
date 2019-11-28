import {StyleSheet} from 'react-native';
import { blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    flex:1,
    padding:30,
    backgroundColor:lightestblue,
  },
  type:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
  },
  board:{
    flex: 4,
    width:300,
    marginTop:15,
    padding:20,
    borderRadius:12,
    backgroundColor:'white',
  },
  title:{
    paddingTop:10,
    fontWeight: 'bold',
  },
  description:{
    paddingTop:10,

  }

});
