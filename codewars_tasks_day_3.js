//task 1 +++
/*
Extract the IDs from the data set
*/
return [].concat.apply(
  [],
  Object.keys(data).map(function (item) {
    return item === "id" ? data[item] : extractIds(data[item]);
  })
);
//task 1 ---

//task 2 +++
/*
Growth of a Population
*/
function nbYear(p0, percent, aug, p) {
  let years = 0;
  for (years; p0 < p; years++) {
    p0 = Math.round(p0);
    p0 += p0 * (percent / 100) + aug;
  }
  return Math.round(years);
}
//task 2 ---

//task 3 +++
/*
Calculate average
*/
function findAverage(array) {
  if (array.length) {
    let sum = 0;
    array.forEach((value) => {
      sum += value;
    });
    return sum / array.length;
  }
  return 0;
}
//task 3 ---

//task 4 +++
/*
List Filtering
*/
function filter_list(l) {
  let newArray = [];
  l.forEach(function (value) {
    if (typeof value !== "string") {
      newArray.push(value);
    }
  });
  return newArray;
}
//task 4 ---

//task 5 +++
/*
Grasshopper - Personalized Message
*/
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }

  return "Hello guest";
}
//task 5 ---

//task 6 +++
/*
Calculate BMI
*/
function bmi(weight, height) {
  let bmi = weight / (height * height);

  if (bmi <= 18.5) return "Underweight";

  if (bmi <= 25.0) return "Normal";

  if (bmi <= 30.0) return "Overweight";

  if (bmi > 30) return "Obese";
}
//task 6 ---

//task 7 +++
/*
Simple multiplication
*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
//task 7 ---

//task 7 +++
/*
Simple multiplication
*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
//task 7 ---

//task 8 +++
/*
Vowel Count
*/
function getCount(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
//task 8 ---

//task 9 +++
/*
Build a pile of Cubes
*/
function findNb(m) {
  let count = 1;
  let check = 0;
  while (check <= m) {
    check += count ** 3;
    if (check == m) {
      return count;
    }
    count += 1;
  }
  return -1;
}
//task 9 ---

//task 10 +++
/*
Rock Paper Scissors!
*/
const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!";
  }

  if (p1 == "scissors") {
    if (p2 == "paper") return "Player 1 won!";
    return "Player 2 won!";
  }

  if (p1 == "paper") {
    if (p2 == "rock") return "Player 1 won!";
    return "Player 2 won!";
  }

  if (p1 == "rock") {
    if (p2 == "scissors") return "Player 1 won!";
    return "Player 2 won!";
  }
};
//task 10 ---
