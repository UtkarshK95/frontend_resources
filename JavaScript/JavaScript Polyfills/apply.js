function sum(a, b) {
  return a + b;
}

console.log(sum.apply(null, [1, 2])); // 3

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const uniqueSymbol = Symbol();
  context[uniqueSymbol] = this;
  const result = context[uniqueSymbol](...args);
  delete context[uniqueSymbol];
  return result;
};

console.log(sum.myApply(null, [1, 2])); // 3
