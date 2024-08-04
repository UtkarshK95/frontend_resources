const numbers = [1, 2, 3, 4];

numbers.forEach((num) => console.log(num)); // Logs 1, 2, 3, 4

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

numbers.myForEach((num) => console.log(num)); // Logs 1, 2, 3, 4
