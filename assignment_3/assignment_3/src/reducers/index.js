import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducer';
import currentMovies from './currentCinemaMoviesReducer';
import upcomingMovies from './upcomingMoviesReducer';

export default combineReducers({
  cinemas,
  movies,
  currentMovies,
  upcomingMovies,
});
