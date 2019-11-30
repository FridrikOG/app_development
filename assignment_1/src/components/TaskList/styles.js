import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { blue, bgwhite, lightyellow, babyblue,lightestblue } from '../../styles/colors';
const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightestblue,

  },
  type: {
    fontSize: 30,
    height:70,
    padding:10,
    width: winWidth,
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:bgwhite,
    color:blue,
  },
  task: {
    margin:10,
    padding:15,
    borderWidth:3,
    fontSize:15,
    flex:2,
    borderColor: lightestblue,
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
  square:{
    width:winWidth/2-30,
    height:100,
    textAlign: 'center',
    padding:10,
  },
  isSelected: {
    padding:5,
    backgroundColor:lightestblue,
  },
  tasktitle: {
    fontWeight:'bold',
    color:blue,
    paddingRight: 10,
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
  },
});
