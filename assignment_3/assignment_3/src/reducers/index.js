import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducer';
import currentMovies from './currentCinemaMoviesReducer';

export default combineReducers({
    cinemas,
    movies,
    currentMovies
});