console.log(0.1 + 0.2);       //=> 0.30000000000000004
console.log(0.1 + 0.2 + 0.3); //=> 0.6000000000000001

var num = 0.1 + 0.2;
console.log(num.toFixed(1));

num = 0.1 + 0.2 + 0.3;
console.log(num.toFixed(4));

//toFixed will round to the last indicated position
//parseFloat makes sure return is a number
function tax (price, percent) {
  return parseFloat((price * percent / 100).toFixed(2));
}

tax(9.85, 7.5); // => "0.74"

var mailedGlove = 9.85;
var armorTax = 7.5;
var total = mailedGlove + tax(mailedGlove, armorTax);
console.log(total);

parseInt("88"); //=> 88
parseInt("88 keys on the piano"); //=> 88
parseInt("There are 88 keys on a piano"); //=> NaN

var userAge = "021";
parseInt(userAge); //=> 21 in ECMA 5+, in older systems, it will return a converted octal value

parseInt("021", 10); // Assures that it returns a base-10 value

console.log(typeof NaN);
console.log(NaN === NaN);
console.log(isNaN("42"));

function isThisActuallyANumberDontLie(data) {
  return (typeof data === "number" && !isNaN(data));
}

console.log(isThisActuallyANumberDontLie(640)); //true
console.log(isThisActuallyANumberDontLie("640")); //false
console.log(isThisActuallyANumberDontLie(NaN)); //false






