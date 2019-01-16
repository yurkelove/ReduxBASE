//Пример работы MidleWare - файл для теста
/*eslint-disable */
export const ping = store => next => action => {
  console.log(
    'Тип события: ' +
      action.type +
      ', дополнительные данные события: ' +
      action.payload
  )
  return next(action)
}
/*eslint-enable */

//ES5 версия
//   var ping = function ping(store) {
//     return function (next) {
//       return function (action) {
//         console.log('ping');
//         return next(action);
//       };
//     };
//   };
