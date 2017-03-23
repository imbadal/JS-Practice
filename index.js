var person = {
    firstname: "badal",
    lastname: "kumar",
    address: {
        street: 'main 123 st.',
        city: 'BBSR',
        state: 'odisha'
    }
};
person.address2 = {
    street: "221 rail dh.f",
    city: "BBSR",
    pin: 454545
}

console.log(JSON.stringify(person)); // this is ok

var person2 = JSON.parse('{"firstname": "badal","lastname": "kumar"}');
console.log(person2);

// **********Function************
fun1("RAJ");

function fun1(name) {
    console.log("Hello " + name);
}

var fun = function(name) {
    console.log("Hello " + name);
}
fun('likun');

console.log(function() {
    console.log("Hello dear");
});

//***************by Value & by Refference**********
var a = 20;
var b;
b = a;
console.log(a);
console.log(b);

var c = {
    name: "kumar"
};
var d;
d = c;
c.name = "John";
console.log(c);
console.log(d);
// as a parameter
function changeName(obj) {
    obj.name = "likun";
}
changeName(d);
console.log(c);
console.log(d);
//equals operator sets a new memory space
c = {
    name: "Badal"
};
console.log(c);
console.log(d);
//****More parameter passing****
function callme(name) {
    console.log('Hello  ' + name);
}
callme('sachin', 'ms'); //no error while passing more arguments

//************* this comes here***********
console.log(this);

function x() {
    console.log(this);
    this.varname = "hay jack";
}
x();

var y = {
    name2: 'kate',
    ex: function() {
        this.name2 = 'riat';
        console.log(this);
    }
}
console.log(varname);

y.ex();

// *************Array : Collection of anything************


var arr = [
    1,
    false,
    {
        name: 'badal',
        like: 'gaming'
    },
    function(name) {
        console.log("Hello " + name);
    },
    "hello"
];
console.log(arr);
arr[3](arr[2].name);

//parameter passing

function greet(name, city, country) {
    country = country || 'india';
    if (arguments.length === 0) {
        console.log("Missing Parameter");
        console.log('*****************');
        return;
    }

    console.log(name);
    console.log(city);
    console.log(country);
    console.log(arguments);
    console.log('arg 0 :' + arguments[0]);
    console.log('arg 1 :' + arguments[1]);
    console.log('arg 2 :' + arguments[2]);
    console.log('****************');
}

greet();
greet('likun', 'BBSR');

// ******Function Overloading**********

function call(fname, lname, lang) {
    lang = lang || 'en';
    if (lang === 'en') {
        console.log('Hello ' + fname + ' ' + lname);
    }
    if (lang === 'es') {
        console.log('Hola ' + fname + ' ' + lname);
    }

}
call('ram', 'raghav', 'es');
call('ken', 'thomps', 'en');
call('likun', 'sans');

function callen(fanme, lname) {
    call(fanme, lname, 'en');
}

function calles(fname, lname) {
    call(fname, lname, 'es');
}

callen('sonu', 'nigam');
calles('amit', 'rocahr');

// ***************Syntax parser***********

// An inteemediate program between your computer and
// the code translate the code.JS engine does this.
// syntax parser read the code determine its valids

// **************Dangerious Aside***********
// ; are optional but some cases its may change the result

function getResult() {
    return {
        firstname: "yazir"
    }
}
console.log(getResult()); // return Undefine

function getResult1() {
    return {
        firstname: "yazir"
    }
}
console.log(getResult1()); //return Object

// ************whitespace***************
// Carriage returns,tabs,spaces i.e. invisible charcters

var

    name,

    age,

    city;

// no error by declaring variables in this way

//************Function Expressions****************

var invokefun = function(name) {
    return 'Hello  ' + name;
};
console.log(invokefun); // funchion shows as output
console.log(invokefun()); //Hello undefined
console.log(invokefun('likun')); //Hello likun

//using an immediately Invoked Function Expression (IIFE)

var invokefun = function(name) {
    return 'Hello  ' + name;
}('likun'); //function Object created
console.log(invokefun);

"Here is a string,Dont be worry no error come for his.look at the next line";

3; //no error
5; //no error i.e valid
{
    name: 'mark'
}; //no error

// anonymous function [look sincerely]
var myname = 'likun';
(function(name) {
    console.log('ha ha!!!!!Its a cheat...........Good job  ' + name);
}(myname));

// **********IIFE and safe code***********

var greeting = 'hola';
(function(global, name) {
    global.greeting = 'hello';
    console.log(greeting + ' ' + name);
}(window, 'likun'));

console.log(greeting);

// ******Understanding Closures****************

function greetme(whattosay) {
    return function(name) {
        console.log(whattosay + " " + name);
    }
}
greetme('hay')('raes'); //one way to pass arguments

var sayHi = greetme('hi'); //other way to pass arguments
sayHi('rase'); //this is a closure

//Understanding closure part 2

function Builtfun() {
    var ar = [];
    for (var i = 0; i < 3; i++) {
        ar.push(
            function() {
                console.log(i);
            }
        );
    }
    return ar;
}
var fs = Builtfun();
fs[0]();
fs[1]();
fs[2]();

//closure

function Builtfun1() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }

            }(i))
        )
    }
    return arr;
}
var fs1 = Builtfun1();
fs1[0]();
fs1[1]();
fs1[2]();

// ***********Function Factories**********

function callMyname(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}
var greeten = callMyname('en');
greeten('jay', 'raver')

var greetes = callMyname('es');
greetes('yash', 'zax');

// ****************closures and callbacks*************
// remove commentlines 309 - 316

function sayhi() {
    var say = 'hi';
    setTimeout(function() {
        console.log(say);
    }, 3000)
}
sayhi();

// callback function : a functionyou gave to another
// function to be run when the other function is finished
// example of callback function

function tellGoodluck(callback) {
    var var1 = 'Good Luck';
    callback();
}
tellGoodluck(function() {
    console.log('Good Luck');
});

tellGoodluck(function() {
    console.log(' well done');
});

// ******CALL() , APPLY() & BIND()************

var person3 = {
    firstname: 'John',
    lastname: 'mark',
    getFullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullname());
    console.log('arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------------------');

}.bind(person3); //instead of .bind(person3); add the next two line

// var logPersonName=logName.bind(person3);
// logPersonName();

logName();

logName.call(person3, 'en', 'es');
logName.apply(person3, ['en', 'es']);

// .apply .bind .call in other way
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullname());
    console.log('arguments: ' + lang1 + ' ' + lang2);

}.apply(person3, ['en', 'es']));

// ******Function Borrowing*********

var person4 = {
    firstname: 'salman',
    lastname: 'zuker'
}
console.log(person3.getFullname.apply(person4));

// Function currying

function multiply(a, b) {
    return a * b;
}
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // o/p 8

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5)); // o/p 10

var multiplyByTwo = multiply.bind(this, 2, 2);
console.log(multiplyByTwo(5)); // o/p 4

var multiplyByTwo = multiply.bind(this);
console.log(multiplyByTwo(5, 4)); // o/p 20

// creating a copy of a function but with some preset parameters is function currying


// ********Functional Programming*************

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item % 2 === 0;
});
console.log(arr3);

var checkPoint = function(limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPoint.bind(this, 2));
console.log(arr4);

var checkLastPoint = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkLastPoint(1));
console.log(arr5);

// underscore.js for functional Programming
//  alter =nate library lodash
//use underscore library
var arr1 = [1, 2, 3, 4, 5];
var arr6 = _.map(arr1, function(item) {
    return item * 3;
});
console.log(arr6);


// *************Object-Oriented Javascript and Prototypal Inheritance**************

// Inheritance : one object gets and access to the property and methods of another object

// classical Inheritance
// prototype Inheritance

// The prototype
// more than one object can share a prototype object
// modern browser do provide a technique to directly access prototype but it slow down your page


var man = {
    Fname: 'default',
    Lname: 'default',
    Fullname: function() {
        return this.Fname + " " + this.Lname;
    }
}

var mark = {
    Fname: 'mark',
    Lname: 'kaneith'
}
// Don't do this EVER !! for demo purpose only
mark.__proto__ = man;
console.log(mark.Fullname());
console.log(mark.Fname);
// Don't do above

var john = {
    Fname: 'john'
}

// Don't do this EVER !! for demo purpose only
john.__proto__ = man;
console.log(john.Fullname());
console.log(john.Fname);
// Don't do above


// Everything is object
var a = {};
var b = function() {};
var c = [];
// check in console a.__proto__,b.__proto__,c.__protp__
// also check b.__proto__.__proto__,c.__protp__.__proto__
// Remember : object.__proto__ is null
// ex: a.__proto__.__proto__ ,b.__proto__.__proto__.__Proto__ are here null

// *********Reflection and Extend***********

// Reflection: An object can look at itself,listing and changing its properties and methods

var man = {
    Fname: 'default',
    Lname: 'default',
    Fullname: function() {
        return this.Fname + " " + this.Lname;
    }
}

var mark = {
    Fname: 'mark',
    Lname: 'kaneith'
}
// Don't do this EVER !! for demo purpose only
mark.__proto__ = man;
for (var prop in mark) {
    console.log(prop + ": " + mark[prop]);
}

for (var prop in mark) {
    if (mark.hasOwnProperty(prop)) {
        console.log(prop + ": " + mark[prop]);
    }

}

var zuke = {
    address: '2wn mr road 112',
    getFullname: function() {
        return this.Lname + " " + this.Fname
    }
}

var asin = {
    getFname: function() {
        return Fname
    }
}

_.extend(mark, zuke, asin);
console.log(mark);
// ____________________________________________________

// ***********Building Objects****************

// Function Cunstructor and new
// Function constroctors are only functions


function employee(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    console.log('This function is invoked');

}

var john = new employee('john', 'mark');
console.log(john)

var jemmy = new employee('jemmy', 'enn');
console.log(jemmy);

console.log('_________________________________');
// Function Constructor : A normal function that is used to construct object
// The this variable points a new empty object, and that object is returned from the function automatically.


// Function Cunstructor and prototype

function Employee(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    console.log('This function is invoked');

}
Employee.prototype.Fullname = function() {
    return this.fname + ' ' + this.lname;
}


var john = new Employee('john', 'mark');
console.log(john)

var jemmy = new Employee('jemmy', 'enn');
console.log(jemmy);

console.log(john.Fullname());

// If you wants to make a function as  functon Cunstructor then start the function from capital letter ex: Employee

// functon Constructor
var a = new Number(5);
console.log(a); //an object aomes as output
console.log(a.toFixed(2)); //o/p:"5.00"

console.log("javascript".length);

var str = new String("javascript");
console.log(str.indexOf("a"));

var d = new Date();
console.log(d);

//
String.prototype.isLength = function(limit) {
    return this.length > limit;
}

console.log("javascript".isLength(5)); //true

Number.prototype.isPositive = function() {
    return this > 0;
}
// 3.isPositive();//error bcoz js can't convert a num to an object automatically but can convert a srting to object automatically

var num = new Number(5);
console.log(num.isPositive()); //true

// *************Dangerious aside of function constructor
// moment.js
console.log("_______________________________________________");
var x = 4;
var y = new Number(4); //object
console.log(x == y); //true
console.log(x === y); //false

var z = Number("4"); //number

console.log(x === z); //true


console.log("______________________");

// Dangerious asides of array

Array.prototype.myFeature = "Dont use 'for in' in case of array ";

var arr7 = ['ind', 'aus', 'nz', 'sa'];
for (var prop in arr7) {
    console.log(prop + ':' + arr7[prop]);
}

// *************Object.create*************

var mydata = {
    Fstname: 'Default',
    Lstname: 'Default',
    greetus: function() {
        return 'Hello ' + this.Fstname;
    }
}

var john = Object.create(mydata);
john.Fstname = 'john';
john.Lstname = 'Mark'
console.log(john);


// Object
//    Fstname: "john"
//    Lstname: "Mark"
//       __proto__: Object
//       Fstname: "Default"
//       Lstname: "Default"
//       greetus: ()
//       __proto__: Object

// Polyfill : code that adds a feature which the engine may lack

// ES6 AND CLASSES

// class is an object in javascript
console.log('__________________________');
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    greetHello() {
        return "Hello " + fname;
    }
}

var john = new Person('John', 'Huger');
console.log(john);

class InfornalPerson extends Person {
    constructor(fname, lname) {
        super(fname, lname);
    }
    greetHello() {
        return "Hay " + fname;
    }
}
var mark = new Person('mark', 'suger');
console.log(mark);

// Syntactic sugar: A different way to type something that doesn't change how it works under the hood

// Initializing array
console.log('____________________');

var people = [{
        fname: 'jurry',
        lname: 'mark',
        address: [
            '2332 st vip',
            '45 rd main'
        ]
    },

    {
        fname: 'razek',
        lname: 'tony',
        addess: [
            '5554 st third',
            '78 rd near'
        ],
        greet: function() {
            return 'Hello!!';
        }
    }
]
console.log(people);

console.log('------------------------');
// *************Strict mode for functions*******

function strict() {
    // Function-level strict mode syntax
    'use strict';

    function nested() {
        return 'And so am I!';
    }
    return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() {
    return "I'm not strict.";
}


console.log('----------------------------');
// typeof,instanceof

// null is a bug in js

var a = 2;
var b = "striing";
var c = {};
var d = [];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(Object.prototype.toString.call(d));

function myperson(name) {
    this.name = name;

}

var e = new myperson('mark');
console.log(typeof e);
console.log(e instanceof myperson);

console.log(typeof undefined);
console.log(typeof null);

console.log('------------------');

// *******Strict Mode*************

var mynameis;
mynamei = {};
console.log(mynamei); //object
console.log(mynameis); //undefine

// in Strict Mode

"use strict"; //it should be on the top of the program or function
var mynameis;
mynamei = {};
console.log(mynamei); //error
console.log(mynameis); //


function strictCheck() {
    "use strict"; //it should be on the top of the program or function

    var mynameis;
    mynamei = {};
    console.log(mynamei); //error
    console.log(mynameis); //
}
strictCheck();









//reach at me
