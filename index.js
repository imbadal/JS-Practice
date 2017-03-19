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
console.log(invokefun); // funchion shows a s output
console.log(invokefun()); //Hello undefined
console.log(invokefun('likun')); //Hello likun

//using an immediately Invoked Function Expression (IIFE)

var invokefun = function(name) {
    return 'Hello  ' + name;
}('likun'); //function Object created
console.log(invokefun);

"Here is a string,Dont be worry no error come for his.look at the next line";

3;//no error
5;//no error i.e valid
{
  name: 'mark'
};//no error

// anonymous function [look sincerely]
var myname='likun';
(function (name) {
  console.log('ha ha!!!!!Its a cheat...........Good job  '+name);
}(myname));







//reach at me
