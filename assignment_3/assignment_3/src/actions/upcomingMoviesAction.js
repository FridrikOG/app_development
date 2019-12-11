import * as constants from '../constants';

export const updateUpcomingMovies = (upcomingMovies) => {
// console.log("Inside update cinema: ", cinemas)
return {
  type: "UPCOMING_MOVIES",
  payload: upcomingMovies,
}
};
