export default function (state = {}, action) {
  switch (action.type) {
    case 'UPCOMING_MOVIES':
      return action.payload;
    default: return state;
  }
}
