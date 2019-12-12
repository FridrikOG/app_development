export default function (state = {}, action) {
  switch (action.type) {
    case "MOVIE":
      return action.payload;
    default: return state;
  }
}
