// Q1 What will it print?
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

// Solution
// 1 0
// Explanation
// let count = 0;
// (function printCount() {
//   if (count === 0) { // true
//     let count = 1; // Shadowing
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

// Q2 Write a function for this
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Solution
function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

// Q3 Time Optimisation with Closures
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}
find(12);

// Solution
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
closure(12);

// Q4 setTimeout + block scope with Closures

// Q5 Create a private counter

// Q6 What is Module Pattern?

// Q7 Make this run only once

// Q8 Once Polyfill Implementation

// Q9 Memoise/Caching Implementation

// Q10 Closure vs Scope
