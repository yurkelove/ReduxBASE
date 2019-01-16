//поле type - обязательное, а payload - "негласное" соглашение.
export function setYear(year) {
  return {
    type: 'SET_YEAR',
    payload: year,
  }
}
