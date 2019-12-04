import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#009999',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#003333',
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 2,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoBorder: {
    borderWidth: 6,
    borderRadius: 400 / 2,
    borderColor: '#e6ffff',
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  button: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: '#ccffff',
    padding: 20,
    backgroundColor: '#009999',
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#e6ffff',
  },
});
