import {StyleSheet, Dimensions} from 'react-native';
import { bgwhite, blue, lightyellow, babyblue,lightestblue } from '../../styles/colors';
const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {

  },
  flatlist:{
    margin:30,

  },
  type:{
    fontSize: 30,
    height:70,
    width: winWidth,
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:bgwhite,
    color:blue,
    padding:15,
  },
  selectIcon: {
    borderWidth:2,
    borderColor:blue,
    borderRadius:22,
    width:20,
    height:20,
    marginBottom:15,
    alignItems: 'center',
    alignContent: 'center',
  },
  board:{
    flex: 4,
    width:300,
    marginTop:15,
    padding:20,
    borderRadius:12,
    borderColor:bgwhite,
    borderWidth:1,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor:'white',
  },
  title:{
    paddingTop:10,
    fontWeight: 'bold',
  },
  description:{
    paddingTop:10,
  },
  isSelected: {
    backgroundColor:blue,
    color:'black',
    padding:10,
    borderRadius:12,
    marginTop:15,
  }

});
