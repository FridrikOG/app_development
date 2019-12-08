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
    borderColor: '#00e6e6',
    backgroundColor: 'white',
    padding: 20,

  },
  logo: {
    width: 200,
    height: 200,
  },
  logoBorder: {
    borderWidth: 6,
    borderRadius: 400 / 2,
    borderColor: 'white',
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  button: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: '#00e6e6',
    padding: 20,
    backgroundColor: '#1a1a1a',
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#f2f2f2',
  },
});
