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

//task 3 +++
/*
Convert a Boolean to a String
*/
function booleanToString(b) {
  return b.toString();
}
//task 3 ---

//task 4 +++
/*
Printer Errors
*/
function printerError(s) {
  let strLength = s.length;
  let errCount = 0;
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code > 109 && code < 123) {
      errCount++;
    }
  }
  return errCount + "/" + strLength;
}
//task 4 ---

//ask 5 +++
/*
Disemvowel Trolls
  */
function disemvowel(str) {
  let replace = "[aeuio]";
  let regExp = new RegExp(replace, "gi");
  return str.replace(regExp, "");
}
//task 5 ---

//task 6 +++
/*
You Can't Code Under Pressure #1
  */
function doubleInteger(i) {
  return i * 2;
}
//task 6 ---

//task 7 +++
/*
Opposites Attract
  */
function lovefunc(flower1, flower2) {
  let flower1IsOdd = flower1 % 2 == 0;
  let flower2IsOdd = flower2 % 2 == 0;

  return flower1IsOdd != flower2IsOdd;
}
//task 7 ---

//task 8 +++
/*
Regex validate PIN code
  */
function validatePIN(pin) {
  let result = pin.match(/^\d{4,6}$/g);
  if (result == null) {
    return false;
  }
  return pin.length == 4 || pin.length == 6;
}
//task 8 ---

//task 9 +++
/*
Basic Mathematical Operations
  */
function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}
//task 9 ---

//task 10 +++
/*
Jaden Casing Strings
  */
String.prototype.toJadenCase = function () {
  let strArray = this.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].replace(
      strArray[i][0],
      strArray[i][0].toUpperCase()
    );
    console.log(strArray[i]);
  }

  return strArray.join(" ");
};
//task 10 ---
