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
