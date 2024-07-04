const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();
  const ages = array.map((person) => {
    if(person.yearOfDeath === undefined) {
      return currentYear - person.yearOfBirth;
    } else {
      return person.yearOfDeath - person.yearOfBirth
    }
  });
 
  const oldestAge = ages.reduce(function (a, b) {
    return Math.max(a, b);
  });
  const oldestPerson = ages.indexOf(oldestAge);
  return people[oldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
