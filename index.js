//
// var person = {
//     firstname: "badal",
//     lastname: "kumar",
//     address: {
//         street: 'main 123 st.',
//         city: 'BBSR',
//         state: 'odisha'
//     }
// };
// person.address2 = {
//   street: "221 rail dh.f",
//   city:"BBSR",
//   pin: 454545
// }
//
// console.log(JSON.stringify(person));// this is ok
//
// var person2 = JSON.parse('{"firstname": "badal","lastname": "kumar"}');
// console.log(person2);
//
// // **********Function************
// fun1("RAJ");
// function fun1(name) {
//   console.log("Hello " + name);
// }
//
// var fun = function (name) {
//   console.log("Hello " + name);
// }
// fun('likun');
//
// console.log(function () {
//   console.log("Hello dear");
// });
//
// //***************by Value & by Refference**********
// var a=20;
// var b;
// b=a;
// console.log(a);
// console.log(b);
//
// var c = {
//   name: "kumar"
// };
// var d;
// d=c;
// c.name = "John";
// console.log(c);
// console.log(d);
// // as a parameter
// function changeName(obj) {
//   obj.name="likun";
// }
// changeName(d);
// console.log(c);
// console.log(d);
// //equals operator sets a new memory space
// c={name: "Badal"};
// console.log(c);
// console.log(d);
//
// //************* this comes here***********
// console.log(this);
//
// function x() {
//   console.log(this);
//   this.varname="hay jack";
// }
// x();
//
// var y={
//   name2:'kate',
//   ex: function () {
//     this.name2='riat';
//     console.log(this);
//   }
// }
// console.log(varname);
//
// y.ex();

// *************Array : Collection of anything************


var arr = [
    1,
    false,
    {
      name: 'badal',
      like:'gaming'
    },
    function (name) {
      console.log("Hello " + name);
    },
    "hello"
];
console.log(arr);
arr[3](arr[2].name);
