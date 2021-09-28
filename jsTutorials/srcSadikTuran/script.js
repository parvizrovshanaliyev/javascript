/*

varaibles
*/

var age;
console.log(age); // undefined

// primitive

let firstName = "Aga";
console.log(typeof firstName);

// references types
let names = ["Aga", "Vagif"];

// object
let address = {
  city: "baku",
  country: "Aze",
};

// function
var calculateAge = function () {
  return 0;
};

console.log(typeof calculateAge);

// type convention

let num1 = "5";
let num2 = "10";

console.log(num1 + num2);

let num3 = Number("5");
let num4 = Number("10");
let num5 = String(num3);
console.log(num3 + num4);
console.log(num5);

// arrow function

let welcomeES5 = function () {
  console.log("Welcome");
};

welcomeES5();

// es6

let welcomees6 = () => {
  console.log("Welcome es6");
};

welcomees6();

let phones = [
  { name: "iphone", price: 1800 },
  { name: "blackBerry", price: 1000 },
];

let arr1 = phones.map(function (phone) {
  return phone;
});

console.log(arr1);

// es6

let arr2 = phones.map((phone) => phone.price);
console.log(arr2);

// this
