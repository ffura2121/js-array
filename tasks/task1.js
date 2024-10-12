//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults() {
  const people = [
    { name: "John", age: 17 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 18 },
  ];

  let adults = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      adults.push(people[i]);
    }
  }
  return adults;
}

console.log(filterAdults());

module.exports = filterAdults;
