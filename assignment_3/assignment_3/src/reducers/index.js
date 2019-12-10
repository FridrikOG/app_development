import { combineReducers } from 'redux';
import cinema from './cinemaReducer';
import movie from './movieReducer';


export default combineReducers({
    cinema,
    movie,
});