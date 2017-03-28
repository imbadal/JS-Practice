// ***********Introduction
//
// What is JavaScript ?
// JavaScript is a cross-platform, object-oriented scripting language
// JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements.
//
// Client-side JavaScript
// Server-side JavaScript
//
// ************JavaScript and Java
//
// JavaScript language resembles Java but does not have Java's static typing and strong type checking.
// JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.
//
//*************JavaScript and the ECMAScript specification
// ECMA :European Computer Manufacturers Association
// ECMa is a standardized verson of JavaScript
//
// W3C : World Wide Web Consortium
// WHATWG (Web Hypertext Application Technology Working Group)
//
//*********************Getting started with JavaScript
// Scratchpad : SHIFT + F4
//
// Hello world:
function greetMe(name) {
    alert('Hello ' + name);
}
// greetMe('JavaScript');


// 2****************Grammar and types*************

//***************Comments:

//comments is the same as in C++
// /*Multiple line comments goes here */
//
//*********** Declarations:
//    There are three kinds of declarations in JavaScript.
//      var : Declares a variable, optionally initializing it to a value.
//      let : Declares a block scope local variable, optionally initializing it to a value.
//      const : Declares a read-only named constant.
//
//**********Variables:
//The names of variables, called identifiers
//A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($)
//
//****************Declaring variables

//You can declare a variable in three ways:
//     i. With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables.
//    ii. By simply assigning it a value. For example, x = 42. This always declares a global variable, if it is declared outside of any function. It generates a strict JavaScript warning. You shouldn't use this variant.
//   iii. With the keyword let. For example, let y = 13. This syntax can be used to declare a block scope local variable
//
//A variable declared using the var or let statement with no initial value specified has the value undefined.

//An attempt to access an undeclared variable will result in a ReferenceError

// console.log('Value of c is '+c); Refference Error ;c is not defined
//
//The undefined value behaves as false when used in a boolean context.
//
//The undefined value converts to NaN when used in numeric context.
//
// var a;
// a + 2;  // Evaluates to NaN
//
// When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts
//
// var n = null;
// console.log(n * 32); // Will log 0 to the console
//
// ************Variable scope
//
//Before ECMAScript 2015.
// a variable declared within a block is local to the function

// if (true) {
//     var x = 5;
// }
// console.log(x); // x is 5

//After ECMAScript 2015.

// if (true) {
//   let y = 5;
// }
// console.log(y);  // ReferenceError: y is not defined

//***************Variable hoisting

// Variable hoisting : you can refer to a variable declared later, without getting an exception

var myvar = 'my value';

(function() {
    console.log(myvar); // undefined
    var myvar = 'local value';
})();

//*************Function hoisting
// For functions, only function declaration gets hoisted to the top and not the function expression
/* Function declaration */

foo(); // "bar"

function foo() {
    console.log('bar');
}

/* Function expression */
// Annonymous Function can't be hoisted
// baz(); // TypeError: baz is not a function
//
// var baz = function() {
//   console.log('bar2');
// };


//**********Global variables

//Global variables are in fact properties of the global object.
// In web pages the global object is window,
// so you can set and access global variables using the window.variable syntax.

//Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name.
// For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.

//**************Constants
//The syntax of a constant identifier is the same as for a variable identifier

const PI = 3.14;

//If the const keyword is omitted, the identifier is assumed to represent a variable.
//You cannot declare a constant with the same name as a function or variable in the same scope.

//For example:
// THIS WILL CAUSE AN ERROR
// function f() {};
// const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
// function f() {
//   const g = 5;
//   var g;

//statements

//
//However, the properties of objects assigned to constants are not protected.

//For example:
const MY_OBJECT = {
    'key': 'value'
};
MY_OBJECT.key = 'otherValue'; //No error

//*****************Data structures and types

//*********Data types

//The latest ECMAScript standard defines seven data types:

// Six data types that are primitives:
//    Boolean. true and false.
//    null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
//    undefined. A top-level property whose value is undefined.
//    Number. 42 or 3.14159.
//    String. "Howdy"
//    Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
// and Object
//
//*********************Data type conversion
//
// JavaScript is a dynamically typed language
// That means you don't have to specify the data type of a variable when you declare it
// Data types are converted automatically as needed during script execution

var answer = 42;
answer = 'Thanks for all the fish...';

x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"

'37' - 7 // 30
    '37' + 7 // "377"

// ********************Converting strings to numbers
//
// parseInt()
// Syntax: parseInt(string, radix);
// radix is in between 2 and 36 (base of number like binary(2),decimal(10)...)

// parseFloat()
// Syntax : parseFloat(string)


parseInt(' 0xF', 16);
parseInt(' F', 16);
parseInt('17', 8);
parseInt(021, 8);
parseInt('015', 10); // parseInt(015, 10); will return 15
parseInt(15.99, 10);
parseInt('15,123', 10);
parseInt('FXX123', 16);
parseInt('1111', 2);
parseInt('15 * 3', 10);
parseInt('15e2', 10);
parseInt('15px', 10);
parseInt('12', 13);


parseFloat('3.14');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14more non-digit characters');

// Number.parseInt()
// Syntax : Number.parseInt(string,[ radix ])
// when a radix is not specified, usually defaulting the value to 10.
// This method has the same functionality as the global parseInt() function:

Number.parseInt === parseInt; // true


// Number.parseFloat() :
// This method behaves identically to the global function parseFloat()
// Syntax : Number.parseFloat(string)


// isNaN()
// Syntax : isNaN(value)

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(0 / 0); //NaN

//Ex:
var isNaN = function(value) {
    return Number.isNaN(Number(value));
}

isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN('37'); // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37'); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN('123ABC'); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN(''); // false: the empty string is converted to 0 which is not NaN
isNaN(' '); // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla'); // true: "blabla" is converted to a number.
// Parsing this as a number fails and returns NaN


//toString()
//The toString() method returns a string representing the specified Number object.
//Syntax : numObj.toString([radix])
//RangeError : If toString() is given a radix not between 2 and 36, a RangeError is thrown.

var count = 10;

console.log(count.toString()); // displays '10'
console.log((17).toString()); // displays '17'
console.log((17.2).toString()); // displays '17.2'

var x = 6;

console.log(x.toString(2)); // displays '110'
console.log((254).toString(16)); // displays 'fe'

console.log((-10).toString(2)); // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'


//Object.prototype.valueOf()
//Syntax : object.valueOf()

function myNumberType(n) {
    this.number = n;
    console.log(this.number); //4
}

myNumberType.prototype.valueOf = function() {
    return this.number * 2;
};

myObj = new myNumberType(4);
myObj + 3; // 11
console.log(myObj + 3);


//************Literals
// Literals are fixed values, not variables

// 1.Array literals
// 2.Boolean literals
// 3.Floating-point literals
// 4.Integers
// 5.Object literals
// 6.RegExp literals
// 7.String literals


// 1.Array literals
// An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]).
var coffees = ['French Roast', 'Colombian', 'Kona'];

var fish = ['Lion', , 'Angel'];
//This array has two elements with values and one empty element (fish[0] is "Lion", fish[1] is undefined, and fish[2] is "Angel").
//If you include a trailing comma at the end of the list of elements, the comma is ignored


//2.Boolean literals
//The Boolean type has two literal values: true and false.

// 3.Floating-point literals
// For example:
// 3.1415926
// -.123456789
// -3.1E+12
// .1e-23

//4.Integers
// Integers can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

//5.Object literals

var car = {
    name: 'safari', //property
    Brand: 'Tata',
    SerialNo: 2233312
}
console.log(car);


// Example:
var unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
}
//console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']); // An empty string
//console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!

//6.RegExp literals
//A regex literal is a pattern enclosed between slashes. The following is an example of an regex literal.
var re = /ab+c/;

//7.String literals
//A string literal is zero or more characters enclosed in double (") or single (') quotation marks.
// Example:
// 'foo'
// "bar"
// '1234'
// 'one line \n another line'
// "John's cat"



// ***************Table: JavaScript special characters
//
//
// Character	 Meaning

//    \0	      Null Byte

//    \b	      Backspace

//    \f	      Form feed

//    \n	      New line

//    \r	      Carriage return

//    \t	      Tab

//    \v	      Vertical tab

//    \'	      Apostrophe or single quote

//    \"	      Double quote

//    \\	      Backslash character

//    \XXX	    The character with the Latin-1 encoding specified by up to
//              three octal digits XXX between 0 and 377. For example,
//              \251 is the octal sequence for the copyright symbol.

//    \xXX	    The character with the Latin-1 encoding specified by
//              the two hexadecimal digits XX between 00 and FF.
//              For example, \xA9 is the hexadecimal sequence for the copyright symbol.

//    \uXXXX	  The Unicode character specified by the four hexadecimal digits XXXX.
//              For example, \u00A9 is the Unicode sequence for the copyright symbol.
//              See Unicode escape sequences.

//    \u{XXXXX}	Unicode code point escapes.
//              For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.

//
//  3.****************Control flow and error handling
//
//*******Block statement

// {
//   statement_1;
//   statement_2;
//   .
//   .
//   statement_n;
// }
//Example
//Block statements are commonly used with control flow statements (e.g. if, for, while).
// while (x < 10) {
//   x++;
// }
var x = 1; {
    var x = 2;
}
console.log(x); // outputs 2

//This outputs 2 because the var x statement within the block is in the same scope as the var x statement before the block.
//
//*************Conditional statements
//
//JavaScript supports two conditional statements: if...else and switch.

// It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:
if (x = y) {
    /* statements here */
    console.log('hiii');
}

//If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

if ((x = y)) {
    /* statements here */
    console.log('It is a good practice');
}

// *******Falsy values

// false
// undefined
// null
// 0
// NaN
// the empty string ("")


var b = new Boolean(false);
if (b) {} // this condition evaluates to true
if (b == true) {} // this condition evaluates to false


// *************switch statement

// switch (expression) {
//   case label_1:
//     statements_1
//     [break;]
//   case label_2:
//     statements_2
//     [break;]
//     ...
//   default:
//     statements_def
//     [break;]
// }


//***********Exception handling statements

// To handle run time error in javascript program
//You can throw exceptions using the throw statement and handle them using the try...catch statements.


//**********Exception types


//   i.DOMException
//  ii.DOMError
// iii.ECMAScript exceptions


//i.*****DOMException  link : https://developer.mozilla.org/en-US/docs/Web/API/DOMException

//  Exception which occurs as a result of calling a method or accessing a property of a web API is called DOMException.
//
//  Error names:

// IndexSizeError
// HierarchyRequestError
// WrongDocumentError
// InvalidCharacterError
// NoModificationAllowedError
// NotFoundError
// NotSupportedError
// InvalidStateError
// SyntaxError
// InvalidModificationError
// NamespaceError
// InvalidAccessError
// TypeMismatchError
// SecurityError
// NetworkError
// AbortError
// URLMismatchError
// QuotaExceededError
// TimeoutError
// InvalidNodeTypeError
// DataCloneError
// EncodingError
// NotReadableError
// UnknownError
// ConstraintError
// DataError
// TransactionInactiveError
// ReadOnlyError
// VersionError
// OperationError
// NotAllowedError


//ii.**********DOMError link: https://developer.mozilla.org/en-US/docs/Web/API/DOMError


//The DOMError interface describes an error object that contains an error name.

//ex : WrongDocumentError  :  The object is in the wrong document.
//     NotFoundError :  The object can not be found here.


//iii.ECMAScript exceptions

//  Error types

// EvalError
// InternalError
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError


try {
    console.log(helloJS());
    console.log('This line wiil not run at the time of exceptions');
} catch (e) {
    console.log('Message : ' + e.message);
    console.log('Descriptions : ' + e.descriptions);
    console.log('Stack tree : ' + e.stack);
} finally {
    console.log('Inside Final block');
}

// try,catch , finally cannot handle syntax erroe

// throw statement used in JavaScript to raise a customizid expression

function divide() {
  var numerator=Number(prompt('Please enter numerator'));
  var denominator=Number(prompt("Enter denominator"));
  try {
    if (denominator==0) {
      throw{
        error:"divide by 0 error",
        message: "denominator can't be 0"
      }
    }
    else {
      console.log('Result = ' +(numerator/denominator));
    }
  } catch (e) {
    console.log('Error : '+e.error);
    console.log('Message : '+e.message);
  } finally {
    console.log("It's the final block");
  }
}
divide();



//*************Promises

// A Promise is in one of these states:

// pending: initial state, not fulfilled or rejected.
// fulfilled: successful operation
// rejected: failed operation.
// settled: the Promise is either fulfilled or rejected, but not pending.

//
//
