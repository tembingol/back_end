//task 1 +++
/*
8 kyu
Remove String Spaces
*/
function noSpace(x) {
  return x.split(" ").join("");
}
//task 1 ---

//task 2 +++
/*
8 kyu
Will you make it?
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};
//task 2 ---

//task 3 +++
/*
7 kyu
Reverse words
*/
function reverseWords(str) {
  let result = str.split(" ").map(function (value) {
    return value.split("").reverse().join("");
  });
  return result.join(" ");
}
//task 3 ---

//task 4 +++
/*
8 kyu
A Needle in the Haystack
*/
function findNeedle(haystack) {
  // your code here
  let index = haystack.indexOf("needle");
  if (index > -1) {
    return "found the needle at position " + index;
  }
}
//task 4 ---

//task 5+++
/*
8 kyu
Count of positives / sum of negatives
*/
function countPositivesSumNegatives(input) {
  if (input === null || input.length == 0) {
    return [];
  }

  let count = 0;
  let sum = 0;

  input.forEach(function (value, index) {
    if (value > 0) {
      count += 1;
    } else if (value < 0) {
      sum += value;
    }
  });

  return [count, sum];
}
//task 5 ---
