function greet() {
  return `Hello, ${this.name}`;
}

const person = { name: "Alice" };
console.log(greet.call(person)); // "Hello, Alice"

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis; // Use global object if context is null/undefined
  const uniqueSymbol = Symbol();
  context[uniqueSymbol] = this;
  const result = context[uniqueSymbol](...args);
  delete context[uniqueSymbol];
  return result;
};

console.log(greet.myCall(person)); // "Hello, Alice"
