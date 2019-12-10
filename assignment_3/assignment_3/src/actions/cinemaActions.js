
import * as constants from '../constants';

export const updateCinema = (cinemas) => {
// console.log("Inside update cinema: ", cinemas)
return {
  type: "CINEMA",
  payload: cinemas,
}
};
