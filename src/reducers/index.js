export const initialState = {
  user: {
    // мы вложили в user вместо строки, объект
    name: 'Василий',
    surname: 'Реактов',
    age: 27,
  },
}

export function rootReducer(state = initialState) {
  return state
}
