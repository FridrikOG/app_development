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
    opacity: 0.7
  },
  title: {
    fontSize: 30,
    color: '#003333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoBorder: {
    borderWidth: 6,
    borderRadius: 200 / 2,
    borderColor: 'white',
    padding: 20,
    backgroundColor: '#e6ffff',
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
