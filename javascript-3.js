// getPath - поиск уникального селектора
// Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
// Уникальный селектор может быть использован `document.querySelector()` и возвращать исходный элемент.
// `document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.


function getPath(elem) {

  if (!elem) {
    return undefined;
  }
  
  let uniqueSelector = getUniqueSelector(elem);

  if (uniqueSelector) {
    return uniqueSelector;
  }

  let path;
  let childIndex = Array.prototype.indexOf.call(elem.parentElement.children, elem) + 1;
  path = getPath(elem.parentElement) + ' > ' + elem.tagName.toLowerCase() + ':nth-child(' + childIndex + ')';

  return path;
}

function getUniqueSelector(elem) {

  if (elem.id) {
    return '#' + elem.id;
  }

  if (elem.classList.length) {

    for (let i = 0; i < elem.classList.length; i++) {
      let cssClass = elem.classList[i];

      if (document.querySelectorAll('.' + cssClass).length === 1) {
        return '.' + cssClass;
      }
    }
  }

  if (elem.tagName === 'BODY') {
    return 'body'
  }
}