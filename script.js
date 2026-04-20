let student = [
  {
    name: "Deep",
    age: 21,
  },
  {
    name: "Deep",
    age: 31,
  },
  {
    name: "Deep",
    age: 29,
  },
  {
    name: "Deep",
    age: 21,
  },
];

let maxAge = Math.max(...student.map((student) => student.age));
console.log(`Maximum Age : ${maxAge}`);

let minAge = Math.min(...student.map((student) => student.age));
console.log(`Minimum Age : ${minAge}`);
