//task 1 +++
/*
Square(n) Sum
*/
function squareSum(numbers) {
  result = 0;
  numbers.forEach(function (value, index) {
    result += Math.pow(value, 2);
  });
  return result;
}
//task 1 ---

//task 2 +++
/*
Unique In Order
*/
var uniqueInOrder = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};
//task 2 ---

//ask 3 +++
/*
Convert a Boolean to a String
*/
function booleanToString(b) {
  return b.toString();
}
//task 3 ---
