export default function (state = {}, action) {
  switch (action.type) {
    case "MOVIE":
      // console.log('Within Cinema reducer ', action.payload);
      return action.payload;
    default: return state;
  }
}
