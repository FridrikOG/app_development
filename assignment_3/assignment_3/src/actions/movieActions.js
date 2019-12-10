import * as constants from '../constants';

export const updateMovie = (movies) => {
// console.log("Inside update cinema: ", cinemas)
return {
  type: "MOVIE",
  payload: movies,
}
};
