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
