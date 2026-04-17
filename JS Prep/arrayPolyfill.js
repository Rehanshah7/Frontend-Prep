Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const arr = [1, 2, 3];

console.log(arr.myMap((x, i) => x * 2 + i));

/*
    Array.prototype is the prototype object shared by all arrays.
    By adding myMap, every array can now call it like:

    callback is a function passed in by the user (just like in real map).

    this refers to the array calling the function eg. [1, 2, 3]

    (value, index, array) refers to (this[i], i, this)
*/
