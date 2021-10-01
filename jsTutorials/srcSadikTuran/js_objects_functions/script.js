/*
 javascript-de primitive type-lar istisna olmaqla her sey-i
 (yeni tip olaraq) object adlandira bilerik.


 primitivies         everything else .
 numbers             Arrays
 strings             functions
 booleans            objects
 undefined           dates
 null                String & Number Object

*/

let val;
let num = 10;
let human = {
  name: "arif",
  birth: 2020,
  job: "student",
};
//1.
val = num;

//2.
val = human;

console.log(val);
console.log(typeof val);

// object literals
let numbers = [1, 2, 3];

val = numbers;

console.log(val);

/*
js de her hansisa bir qelb (oop temelli dillerdeki class)
function ctor vasitesile tetbiq edilmekdedir.

yaradilan f ctor-dan yeni instance-lar yaradilir.
*/

// creating objects: Function Constructors
console.log("// creating objects: Function Constructors es5");
// obj literals

// oh no oh no
console.log("// oh no oh no");
let arif = {
  name: "arif",
  yearOfBirth: 2010,
  job: "nope",
};
console.log(arif);

// it is okay
console.log("// it is okay");

// v1 defined
function Person(name, yearOfBirth, job) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
  this.calculateAge = () => 2021 - this.yearOfBirth;

  // yaradilan her bir instance-da isleyecek
  console.log(this);
}

// v2 defined
let Person2 = function (name, yearOfBirth, job) {
  this.name = name;
  this.job = job;
  this.yearOfBirth = yearOfBirth;
  this.calculateAge = () => 2021 - this.yearOfBirth;

  // yaradilan her bir instance-da isleyecek
  console.log(this);
};

// v1
var samuray = new Person("samuray", 1990, "samuray");
// v2
var samuray2 = new Person2("samuray2", 1992, "samuray2");

console.log("*************protoType : inheritance***************");
/*
--- protoType : inheritance
js-de inheritance varislik prototype vasitesile tetbiq edilir.

ctor function-lar vasitesile yaradilan obyektler-de eyni xususiyyetler 
prototype vasitesile yeni instancelara oturulur, bunun temelinde 
inheritance dayanmaqdadir , yaradilan ctor-lar ozlerinde Object-den inheritance almaqdadir.

// Person ctor() => Object { 
    * Prototype
    hasOwnProperty(),
    isPrototypeOf(),
    constructor(),
    toString()
    valueOf()

}
*/

// yaradilan obj-nin prototype-na her hansisa bir xususiyyet elave ede bilerik

Person.prototype.calculateAge2 = function () {
  return 2021 - this.yearOfBirth;
};

console.log(samuray.calculateAge2());

let teacher = function (subject) {
  this.subject = subject;
};
console.log("*************demo : creating Objects***************");
/*
Demo : creating Objects

** name ve salary melumatlarini qebul eden Employee
ctor teyin edin.
** il erzinde cari tarixe esasen alinan toplam maash ve toplam vergi
migdarini hesablayan func yazin.

vergi faiz:
 ** 20.000 ' e qeder 20%
 ** 30.000 ' e qeder 25%
 ** 30.000 ' den sonra 27%
*/

function Employee(name, salary) {
  if (!(this instanceof Employee)) {
    return new Employee(name, salary);
  }
  this.name = name;
  this.salary = salary;
}
Employee.prototype.calculateSalary = function () {
  var month = new Date().getMonth() + 1;
  var tax = 0,
    total = 0;

  total = this.salary * month;

  /*
     total=(total * 20)/100
  
  */
  if (total <= 20000) {
    tax = total * 0.2;
  } else if (total > 20000 && total <= 30000) {
    tax = total * 0.25;
  } else {
    tax = total * 0.3;
  }
  //   console.log(`total : ${total}`);
  //   console.log(`tax : ${tax}`);

  return {
    tax: tax,
    paid: total - tax,
  };
};

var emp1 = Employee("emp1", 3000);
console.log(emp1.calculateSalary());
var emp2 = new Employee("emp2", 4000);

console.log("*************creating Objects : Object.create***************");

/*
object create vasitesi ile var olan objnin ozeliklerini yeni 
bir objeye oture bilerik
*/

let human1 = Object.create(Person2);
human1.name='human1';
console.log(human1);
// initial value
let human2 = Object.create(Person,{
    name:{value:'human2 name'},
    yearOfBirth:{value:1990},
    job:{value:"human 2 job"}
});
console.log("initial value");
console.log(human2);
