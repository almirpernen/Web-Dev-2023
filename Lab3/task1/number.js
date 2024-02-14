//1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
//2
alert( Math.round(6.35 * 10) / 10 );
//3
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }

alert(`Read: ${readNumber()}`);
//4
let i = 0;
while (i < 11) {
i += 0.2;
if (i > 9.8 && i < 10.2) alert( i );
}
//5
function random(min, max) {
    return min + Math.random() * (max - min);
  }

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
//6
function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
alert( randomInteger(1, 3) );