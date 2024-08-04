// Q1. Return only names of students in capital
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Jane", rollNumber: 16, marks: 35 },
  { name: "Rohan", rollNumber: 12, marks: 55 },
];
// Solution
const name = students.map((stu) => stu.name.toUpperCase());
// console.log(name);

// Q2 Return only details of those who scored more that 60 marks
// Solution
const detail = students.filter((stu) => stu.marks > 60);
// console.log(details);

// Q3 Return only details of those who scored more that 60 marks and roll number greater than 15
// Solution
const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);
// console.log(details);

// Q4 Sum of marks of all students
// Solution
const sum = students.reduce((acc, curr) => (acc += curr.marks), 0);
// console.log(sum);

// Q5 Names of all students who scored more than 60
// Solution
const names = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
// console.log(names);

// Q6 Return total marks for students with marks greater than 60 after 20 marks have been added to those have less than 60 marks
// Solution
const sums = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => (acc += curr.marks), 0);
// console.log(sums);
