// Написать функцию суммирования значений
// Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
// Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

function sum(n) {
  let currentSum = n;

  function sumNext(b) {
    if (!b) {
      return currentSum;
    }
    else {
      currentSum += b;
      return sumNext;
    }
  }

  sumNext.toString = function () {
    return currentSum;
  }

  return sumNext;
}

console.log("=== 9", sum(1)(2)(3)(-2)(5)() === 9);