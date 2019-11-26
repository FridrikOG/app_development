import { StyleSheet } from 'react-native';
import { blue } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
  },
  toolbarAction: {
    flex: 0,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 30,
  },
});
