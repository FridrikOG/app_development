export default function (state = {}, action) {
  switch (action.type) {
    case 'CINEMA':
      return action.payload;
    default: return state;
  }
}
