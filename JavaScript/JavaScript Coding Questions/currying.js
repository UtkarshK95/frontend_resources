// Q1 Implement sum(2)(6)(1)

// Solution
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1));

// Q2 Reusing Variable for logic
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

// Solution
// function evaluate(operation) {
//   return function (num1) {
//     return function (num2) {
//       if (operation === "sum") {
//         return num1 + num2;
//       } else if (operation === "multiply") {
//         return num1 * num2;
//       } else if (operation === "divide") {
//         return num1 / num2;
//       } else if (operation === "substract") {
//         return num1 - num2;
//       } else {
//         return "Invalid";
//       }
//     };
//   };
// }
// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));

// Q3 Infinite Currying -> sum(1)(2)(3)....(n)
// sum(1)(2) -> 3
// sum(2)(5)(5)(8) -> 20

// Solution
// function add(a) {
//   return function (b) {
//     if (b === undefined) {
//       return a;
//     }
//     return add(a + b);
//   };
// }
// console.log(add(1)(2)(3)());
// console.log(add(1)(2)(3)(4)());

// Q4 Currying vs Partial Application

// Solution

// Q5 Manipulating DOM

// Solution

// Q6 curry() implementation

// Solution
