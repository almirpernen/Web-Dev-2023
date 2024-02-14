//1
let i = 3;

while (i) {
  alert( i-- );
  // shows 3, decreases i to 2
  // shows 2, decreases i to 1
  // shows 1, decreases i to 0  
}
//1

//2
let j = 0;
while (++j < 5) alert( j );//From 1 to 4
while (j++ < 5) alert( j );//From 1 to 5

//3
for (let i = 0; i < 5; ++i) alert( i );//1 to 4
for (let i = 0; i < 5; i++) alert( i );//1 to 4

//4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
//5
while (j < 3) {
  alert( `number ${j}!` );
  j++;
}

//6
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}