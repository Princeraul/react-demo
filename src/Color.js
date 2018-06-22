const color = (state, action) => {
  switch (action.type) {
    case 'RATE_COLOR':
      return (state.id === action.id) ?
        state : {...state, rating: action.rating}
      break;
    default:
  }
}
export default color
