import * as constants from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case "CURRENT_CINEMA_MOVIES":
      // console.log('Within Cinema reducer ', action.payload);
      return action.payload;
    default: return state;
  }
}
