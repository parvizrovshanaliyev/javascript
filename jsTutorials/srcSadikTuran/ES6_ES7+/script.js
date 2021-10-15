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

console.log("************* arrow function this***************");
// this

/* arrow function-larin standart functiondan ferqlerinden biri-de 
   odur ki arrow function-daki this  oz thisi deyil ,
   yeni arrow function ucun bir scope ve ya context yaranmir
*/
console.log(`// es5/////////////`);

let listes5 = {
  category: "phone",
  names: ["IPhone 4", "Samsung s3"],
  call: function () {
    var self = this; // es5 version
    this.names.map(function (name) {
      console.log(`${self.category} ${name}`);
    });
  },
};

listes5.call();

console.log(`// es6//////////////`);

// es6
let listes6 = {
  category: "phone",
  names: ["IPhone 4", "Samsung s3"],
  call: function () {
    this.names.map((name) => {
      console.log(`${this.category} ${name}`);
    });
  },
};

listes6.call();

console.log(`************* spread operator***************`);
/*
    spread operator

    ... operator vasitesi ile tek tek deyer daxil etmek  yerine 
    function icerisine array oture bilerik.
*/

function getTotal(a, b, c) {
  return a + b + c;
}

console.log(getTotal(10, 20, 30));

let numbers = [10, 20, 30];

// es5
console.log(`es5 : getTotal.apply(null,numbers)`);

console.log(getTotal.apply(null, numbers));

// es6
console.log(` es6 :getTotal(...numbers)`);
console.log(getTotal(...numbers));

//
let arr11 = ["1", "2"];
let arr22 = ["3", "4"];

arr11.push(...arr22);

console.log(arr11);

arr11.unshift(...arr22);

console.log(arr11);

console.log(`************* rest parameters***************`);
/*
    rest parameters
*/

function sum() {
  let arr = Array.prototype.slice.call(arguments);
  let result = 0;
  arr.forEach(function (item) {
    result += item;
  });

  return result;
}

console.log(sum(1, 2, 3));

// es6

function sumES6(...arr) {
  let result = 0;
  arr.forEach((item) => (result += item));
  return result;
}

console.log(sumES6(1, 2, 3));

console.log(`************* destructuring***************`);
/*
    destructuring
*/
var a, b, rest;
a = 10;
b = 20;

[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(rest);

/*
    destructuring assignment
*/

/*
    array destructuring 
*/
const arrConfig = ["localHost", "8080", "900"];
// es5

var server = arrConfig[0];
var port = arrConfig[1];
var timeout = arrConfig[2];

// es6

const [server1, port1, timeout1] = arrConfig;
/*
    object destructuring 
*/

// es5
const objConfig = {
  server3: "localHost",
  port3: "8080",
};

var server2 = objConfig.server;

// es6
const { server3, port3 } = objConfig;
console.log(server3);

let { port3: t } = objConfig;
console.log(t);

console.log(`************* es6 : array***************`);
/*
    es6 : array

    // es5 de istifade edilen Array.prototype.slice.call(arguments);

    yerine Array.from() istifade edilir.
*/

// from
/*
 -froma gonderilen deyerin arraye cevrilmesi 
*/
let arrFrom = Array.from("Modern Javascript");
console.log(arrFrom);

const products = [
  { name: "S8", price: 2000 },
  { name: "S9", price: 3000 },
];

console.log(Array.from(products, (item) => item.price));
// tek obyekt geri donecek
console.log(products.find((i) => i.name == "S9"));
// eyni deyere birden cox obyekt beraber ola bileceyinden arr icerisinde uygun deyere sahib obyektler geri donecek
console.log(products.filter((i) => i.name == "S8"));

console.log(`************* es6 : Maps***************`);

/*
    es6 : Maps

    // key / value pair collectionlar
*/

let val;

const numbers1 = new Map();

numbers1.set(1, "one");
numbers1.set("2", "two");

val = numbers;
console.log(val);

val = numbers1.get(1);
console.log(val);

console.log(`************* es6 : Sets***************`);

/*
    es6 : Sets

    // collection - unique value saxlayir , yeni eyni deyerleri ozunde saxlamir.
*/

var mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add("two");
mySet.add({ a: 1, b: 2 });
var obj = { a: 1, b: 2 };
mySet.add(obj);
console.log(mySet);

console.log(`************* es6 : classes***************`);

/*
    es6 : classes
*/

let Person = function (name, job, yearOfBirth) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge= function(){
  return 2021 - this.yearOfBirth;
}

let rufat = new Person('Rufat', 'dev', 2020);
console.log(rufat.calculateAge());

// es6

class Person1{
  constructor(name,job,yearOfBirth) {
  this.name=name;
  this.job=job;
  this.yearOfBirth=yearOfBirth;
  }
  
  calculateAge(){
    return 2021 - this.yearOfBirth;
  }
//es6 : static methods
  static sayHi(){
    console.log('Hello world from static methods')
  }
}
let rufat1 = new Person1('Rufat', 'dev', 2020);

console.log(rufat1.calculateAge());


console.log(`************* es6 : static methods***************`);

/*
    es6 : static methods
*/
// static method bir basa obyektin oz uzerinden cagrilmalidir.
/* wrong!   rufat1.sayHi(); */

// right
Person1.sayHi();


/*
    es6 :sub classes
*/

class PersonES6{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }
}

class CustomerES6 extends PersonES6{
  constructor(firstName,lastName,phone,userName){
    super(firstName,lastName)
    this.phone=phone;
    this.userName=userName;
  }
}

let customer= new CustomerES6('musteri','musteriOglu',12345,'musterili');

console.log(customer);
 



