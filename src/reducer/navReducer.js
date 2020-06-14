const initialState = {
  isOpenNavigation: false
}

export const navReducer = (state = initialState, action) => {
  console.log('Nav ')
  switch (action.type) {
    case 'IS_OPEN':
      return {
        ...state,
        isOpenNavigation: !state.isOpenNavigation
      }

    default:
      return state
  }
}