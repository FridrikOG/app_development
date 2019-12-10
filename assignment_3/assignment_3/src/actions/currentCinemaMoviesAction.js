import * as constants from '../constants';

export const updateCurrentCinemaMovies = (currentCinemaMovies) => {
// console.log("Inside update cinema: ", cinemas)
return {
  type: "CURRENT_CINEMA_MOVIES",
  payload: currentCinemaMovies,
}
};
