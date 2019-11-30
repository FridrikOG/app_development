import { StyleSheet } from 'react-native';
import { blue, lightestblue, babyblue } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    padding: 15,
  },
  toolbarAction: {
    flex: 0,
    alignItems: 'center',
    borderColor:'white',
    borderWidth:1,
    marginRight:15,
    borderRadius:12,
    width:100,
    backgroundColor:'#29a3a3',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    color:'white'
  },
});
