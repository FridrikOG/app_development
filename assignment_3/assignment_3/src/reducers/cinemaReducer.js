import * as constants from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case "CINEMA":
      // console.log('Within Cinema reducer ', action.payload);
      return action.payload;
    default: return state;
  }
}
