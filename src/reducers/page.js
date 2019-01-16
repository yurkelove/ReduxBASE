const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'

const initialState = []
function page(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_SUCCESS:
      return { ...state, photos: action.payload } //Object spread syntax // Возвращаем новый обьект
    default:
      return state
  }
}
