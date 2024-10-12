// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return null;
}

const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 19 },
  { name: "Jill", age: 21 },
  { name: "Jack", age: 23 },
];


console.log(findByName(people, "Jane")); 
module.exports = findByName;
}

module.exports = findByName;
