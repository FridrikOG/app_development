import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  movie: {
    flexDirection: 'column',
    width: 170,
    height: 280,
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#e6ffff',
    paddingBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    margin: 5,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 15,
    width: '100%',
    backgroundColor: '#00cccc',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  year: {
    marginTop: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  imageWrapper: {
    paddingTop: 10,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  trailerButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    borderColor: '#00cccc',
  },
});
