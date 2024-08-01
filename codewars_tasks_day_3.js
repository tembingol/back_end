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
