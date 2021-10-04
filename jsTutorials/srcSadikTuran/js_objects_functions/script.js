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
object create vasitesi ile var olan obj-nin ozeliklerini yeni 
bir obj-eye oture bilerik
*/

let human1 = Object.create(Person2);
human1.name = "human1";
console.log(human1);
// initial value
let human2 = Object.create(Person, {
  name: { value: "human2 name" },
  yearOfBirth: { value: 1990 },
  job: { value: "human 2 job" },
});
console.log("initial value");
console.log(human2);

console.log("*************prototypal inheritance***************");
/*
prototype vasitesile ile varislik
*/

let Person3 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person3.prototype.calculateAge = function () {
  return 2021 - this.yearOfBirth;
};
let Teacher = function (name, yearOfBirth, job, subject) {
  /*
   burada Personla eynilik teskil eden fieldleri bir daha
   Teacher icerisinde teyin etmek yerine Person objectinin 
   call methoduna eynilik teskil eden fieldler hansiki evvelceden 
   Person-da teyin edilmisdi ve this yeni Teacher objectini gonderirik.
  */
  Person3.call(this, name, yearOfBirth, job);

  this.subject = subject;
};

// inherit the Person prototype methods
Teacher.prototype = Object.create(Person3.prototype);
console.log(Teacher.prototype.constructor);

// set Teacher constructor
Teacher.prototype.constructor = Teacher;

let yegane = new Teacher("Yegane", 1990, "teacher", "biology");

console.log(yegane);
console.log(yegane.calculateAge());

console.log("*************Buit-in Constructors***************");

/*
---- yaradilan objectin prototype hissesinde hazir gelen 
methodlar movcuddur lazimi hallarda biz ozumuz hem o methodlari eze / override ede hemde 
yeni extend methodlarimiziproto-ya elave ede bilerik. 

*/

// string

var str1 = "agil";
var str2 = new String("agil");

// if (str1 == str2) return true; // value eyni oldugu ucun
// if (str1 === str2) return false; // value eyni olsada str2 typeof Object-dir.

// extend string method

String.prototype.repeat = function (n) {
  return new Array(n + 1).join(this);
};
console.log("str1".repeat(2));
// number
var num1 = 10;
var num2 = new Number(10);

// boolean
var bool1 = true;
var bool2 = new Boolean(true);

// object

var obj1 = {
  name: "vagif",
};

var obj2 = new Object({
  name: "vagif",
});

// array
var arr1 = ["vagif", "arif", "agasif"];
var arr2 = new Array("vagif", "arif", "agasif");

/*
-- eger Array-in protosunda remove method-u olsa idi,
bizim yazdigimiz method kohneni override edir, 

*/
Array.prototype.remove =
  Array.prototype.remove || // Array.prototype.remove || yeni extend edilen methodun array-de olub olmamasini yoxlayiriq.
  function (member) {
    var index = this.indexOf(member);

    if (index > -1) {
      this.splice(index, 1);
    }

    return this;
  };

arr1.remove("vagif");
console.log(arr1);

console.log("*************Demo : Inheritance***************");
/*
person ctor function yaradaraq , Example-da Person --> student,Person --> teacher ,teacher ---> Headmaster (mudur), yaradilmalidir
*/
// person ctor
var Person4 = function (name) {
  this.name = name;
};

Person4.prototype.Introduce = function () {
  console.log(`MY NAME IS : ${this.name}`);
};

let person4 = new Person4("asif");
person4.Introduce();

// teacher ctor
var Teacher2 = function (name, branch) {
  Person4.call(this, name);

  this.branch = branch;
};
Teacher2.prototype = Object.create(Person4.prototype);
Teacher2.prototype.constructor = Teacher2;
Teacher2.prototype.teach = function () {
  console.log(`i teach :${this.branch}`);
};
let teacher2 = new Teacher2("sevil", "math");
teacher2.Introduce();
teacher2.teach();

// student
var Student = function (name, number) {
  Person4.call(this, name);
  this.number = number;
};
Student.prototype = Object.create(Person4.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(
    `my student number is: ${this.number}, I have already studied hard.`
  );
};
let student = new Student("sevil", 456);
student.Introduce();
student.study();

// Head master ctor
var HeadMaster = function (name, branch) {
  Teacher2.call(this, name, branch);
};

HeadMaster.prototype = Object.create(Teacher2.prototype);
HeadMaster.prototype.constructor = HeadMaster;
HeadMaster.prototype.shareTask = function () {
  console.log(`i have already shared all the work`);
};
let headmaster = new HeadMaster("headMaster mudur", "physics");
headmaster.Introduce(); // person
headmaster.teach(); // teacher
headmaster.shareTask(); // headmaster

console.log("*************primitive & objects***************");
/*
 value type and reference type

 stack vs heap
*/

var a = 10;
var b = a;

console.log(a);
console.log(b);

console.log("reference type : obj");

var objRef1 = {
  name: "asif",
  age: 12,
};

var objRef2 = objRef1;
objRef1.age = 13;

console.log(objRef2.age);
console.log(objRef1.age);

console.log("*************callBack functions***************");
/*
 callBack functions
*/

let val1;

// without call back
function multiplyByTwo(a, b, c) {
  let arr = [];

  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i] * 2; // function parametrlerini arguments vasitesile goture bilerik.
  }

  return arr;
}

function addOne(a) {
  return a + 1;
}

val1 = multiplyByTwo(5, 10, 20);
console.log(val1);

for (let i = 0; val1.length; i++) {
  val1[i] = addOne(val1[i]);
}
console.log(val1);

val1 = addOne(10);
console.log(val1);

// with callback

function multiplyByTwo2(a, b, c, callback) {
  let arr = [];

  if(callback && typeof callback === 'function'){
    for (let i = 0; i < arguments.length; i++) {
      arr[i] = callback(arguments[i] * 2); // function parametrlerini arguments vasitesile goture bilerik.
    }
  }
  
  return arr;
}

val1 = multiplyByTwo2(5, 10, 20, addOne);

console.log(val1);


// anonymous function
val1 = multiplyByTwo2(5, 10, 20, function(a){return a+1;});
console.log(val1);

