const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const doubledPolyfill = numbers.myMap((num) => num * 2);
console.log(doubledPolyfill); // [2, 4, 6, 8]
