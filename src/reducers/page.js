const initialState = {
  year: 2018,
  photos: [],
}

// Научим редьюсер page реагировать на наше действие(action):
// pageReducer(state=initialState,action) action -стандартный аргумент
//мы не изменили объект state, а вернули новый с полем year равным action.payload (а значит годом, выбранным пользователем, который был послан в action.payload).
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload } // мы не изменили объект state

    default:
      return state
  }
}
