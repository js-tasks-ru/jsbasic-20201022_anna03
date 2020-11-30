/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const list = document.createElement('ul')
  for (let name of friends) {
    list.innerHTML += '<li>${name.firstName} ${name.lastName}</li>'
  }
  return list
}
