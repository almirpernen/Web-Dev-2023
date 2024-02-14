//1
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
//2
function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr2 = [5, 3, 8, 1];

let filtered = filterRange(arr2, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr2 ); // 5,3,8,1 (not modified)
//3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4); // removed the numbers except from 1 to 4

alert( arr3 ); // [3, 1]
//4
let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a);

alert( arr4 );
//5
function copySorted(arr) {
  return arr.slice().sort();
}

let arr5 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr5);

alert( sorted );
alert( arr5 );
//6
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
//7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary
//8
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

//9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr = [ pete2, john2, mary2 ];

sortByAge(arr);

// now sorted is: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

//10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr6 = [1, 2, 3];
shuffle(arr6);
alert(arr6);

//11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr7 = [ john3, pete3, mary3 ];

alert( getAverageAge(arr) ); // 28

//12
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
//13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}