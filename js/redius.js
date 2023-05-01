const users = [
  {
    id: 1,
    name: 'Nikita',
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: 'Mike',
    age: 21,
    isActive: false,
  },
  {
    id: 3,
    name: 'Mike',
    age: 23,
    isActive: true,
  },
  {
    id: 4,
    name: 'Jeck',
    age: 30,
    isActive: true,
  },
  {
    id: 5,
    name: 'Mike',
    age: 17,
    isActive: true,
  },
];

const getUsersActive = (data) => data.filter((dataItem) => dataItem.isActive).map((dataItem) => dataItem.name);

// console.log(getUsersActive(users));

const sortByAge = (data) => data.sort((a, b) => b.age - a.age).map((dataItem) => dataItem.name);

//console.log(sortByAge(users));

const getAvarigeAge = (data) => data.reduce((acc, dataItem) => acc + dataItem.age, 0) / data.length;

// console.log(getAvarigeAge(users));

const getUniqNames = (data) => data.reduce((acc, dataItem) => acc.includes(dataItem.name) ? acc : [...acc, dataItem.name], []);

// console.log(getUniqNames(users));

const fruts = ['Банан', 'Мандарин' , 'Банан' , 'Апельсин', 'Яблоко'];

const getUniqItem = (arr) => [...new Set(arr)];

console.log(getUniqItem(fruts));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const getSum35 = (n) => [...Array(n).keys()].reduce((acc, item) => item % 3 === 0 || item % 5 === 0 ? acc + item : acc, 0);

console.log(getSum35(1000));
