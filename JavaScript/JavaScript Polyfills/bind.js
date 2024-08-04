function greet() {
  return `Hello, ${this.name}`;
}

const person = { name: "Alice" };
const greetPerson = greet.bind(person);
console.log(greetPerson()); // "Hello, Alice"

Function.prototype.myBind = function (context, ...args) {
  const self = this;
  return function (...newArgs) {
    return self.apply(context, [...args, ...newArgs]);
  };
};

const greetPersonPolyfill = greet.myBind(person);
console.log(greetPersonPolyfill()); // "Hello, Alice"
