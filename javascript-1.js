// Написать функцию суммирования значений
// Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
// Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

function sum(n) {
  let currentSum;

  // We can return NaN or throw error (if n is incorrect), but I decided to return 0
  if (typeof n != 'number') {
    currentSum = 0;
  }
  else {
    currentSum = n;
  }

  function sumNext(b) {

    if (typeof b == 'number') {
      currentSum += b;
      return sumNext;
    }
    else {
      return currentSum;
    }
  }
  
  sumNext.toString = function () {
    return currentSum;
  }
  return sumNext;
}

console.log("=== 9", sum(1)(2)(3)(-2)(5)() === 9);

// console.log don't call toString by default
console.log(sum()(), sum(6)(5)(1).toString())