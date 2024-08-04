const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

Array.prototype.myFlat = function (depth = 1) {
  let result = [];

  (function flatten(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        flatten(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  })(this, depth);

  return result;
};

const flattenedArrayPolyfill = nestedArray.myFlat(2);
console.log(flattenedArrayPolyfill); // [1, 2, 3, 4, 5, 6]
