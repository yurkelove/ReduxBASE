import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../action/PageAction'

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
}

// Научим редьюсер page реагировать на наше действие(action):
// pageReducer(state=initialState,action) action -стандартный аргумент
//мы не изменили объект state, а вернули новый с полем year равным action.payload (а значит годом, выбранным пользователем, который был послан в action.payload).
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false }

    default:
      return state
  }
}
