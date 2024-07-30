//task 1 +++
/*
  Count IP Addresses
    */
function solution(nums) {
  if (nums == null) return [];
  return nums.sort((a, b) => a - b);
}
//task 1 ---

//task 2 +++
/*
  Sort Numbers
    */
function ipsBetween(start, end) {
  let count =
    (end.split(".")[0] - start.split(".")[0]) * Math.pow(256, 3) +
    (end.split(".")[1] - start.split(".")[1]) * Math.pow(256, 2) +
    (end.split(".")[2] - start.split(".")[2]) * Math.pow(256, 1) +
    (end.split(".")[3] - start.split(".")[3]) * 1;

  return count;
}
//task 2 ---

//task 3 +++
/*
  Simple Fun #347: Bulb Maze I
    */
function bulbMaze(maze) {
  let pass = true;
  let reversed = false;
  for (let i = 0; i < maze.length; i++) {
    if (reversed && maze[i] == "x") {
      console.log("maze[i] == x");
      pass = false;
      break;
    } else if (!reversed && maze[i] == "o") {
      console.log("maze[i] == 0");
      pass = false;
      break;
    }
    reversed = !reversed;
  }
  return pass;
}
//task 3 ---

//task 4 +++
/*
  Simple Pig Latin
    */
function pigIt(str) {
  let newArray = [];
  str.split(" ").forEach(function (value, index) {
    if (/^[A-Za-z]+$/.test(value)) {
      newArray.push(value.substring(1) + value[0] + "ay");
    } else {
      newArray.push(value);
    }
  });

  return newArray.join(" ");
}
//task 4 ---

//task 5 +++
/*
  Who likes it?
    */
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
//task 5 ---

//task 6 +++
/*
  Number of People in the Bus
    */
var number = function (busStops) {
  let result = 0;

  busStops.forEach(function (value, index) {
    result += value[0] - value[1];
    console.log(value);
  });
  return result;
};
//task 6 ---

//task 7 +++
/*
  Credit Card Mask
    */
function maskify(cc) {
  let str = cc.split("");
  if (str.length > 4) {
    for (let i = 0; i < str.length - 4; i++) {
      str[i] = "#";
    }
  }
  return str.join("");
}
//task 7 ---

//task 8 +++
/*
  Isograms
    */
function isIsogram(str) {
  let result = true;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      result = false;
      break;
    }
  }
  return result;
}
//task 8 ---

//task 9 +++
/*
  Transportation on vacation
    */
function rentalCarCost(d) {
  const price = 40;

  if (d >= 3 && d < 7) {
    return price * d - 20;
  } else if (d >= 7) {
    return price * d - 50;
  }
  return price * d;
}
//task 9 ---

//task 10 +++
/*
  Extract the IDs from the data set
    */
function extractIds(data) {
  return [].concat(
    ...Object.keys(data).map(function (item) {
      return item === "id" ? data[item] : extractIds(data[item]);
    })
  );
}
//task 10 ---
