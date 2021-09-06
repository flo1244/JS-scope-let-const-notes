//Global scope
var numOfDrinks = 5;

var drinks = function () {
  var tea = 6 + numOfDrinks;
  console.log(tea);
};

drinks();
//11
if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
//lemon-lime
//Function scope
var drinks = function () {
  var tea = 6 + numOfDrinks;
  console.log(tea);
};
//ReferenceError
console.log(tea);
//tea can't be accessed outside drinks function.

//Block scope
if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
//lemon-lime
soda = "cola";
console.log(soda);
//cola
//reassigning var outside scope --> errors

//Let & const
if (numOfDrinks === 5) {
  let soda = "lemon-lime";
  console.log(soda);
}
//lemon-lime

console.log(soda);
//ReferenceError
//soda var is protected from being accessed outside code block

const numOfDrinks = 5;

const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};

drinks();
//11

const numOfDrinks = 5;
numOfDrinks = 7;

console.log(numOfDrinks);
//SyntaxError: /script.js: "numOfDrinks" is read-only
//reassign any var declared with const recieve error
