export default function (state = {}, action) {
  switch (action.type) {
    case 'CURRENT_CINEMA_MOVIES':
      return action.payload;
    default: return state;
  }
}
