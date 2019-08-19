"use strict";
//using functions and types
//we can specify the return type
var age;
age = 24;
var name1;
name1 = "logan";
//we can assign the type for the params AND the return type***************
var returnMyName = function (str) {
    return str;
};
//not using arrow syntax
function returnMyName2(str) {
    return str;
}
//void can be used as type for return value of fn's that don't return anything
var sayHi = function () {
    console.log("HI!");
};
//specify multiple param types and return type for multiply fn
var multiply = function (num1, num2) {
    return num1 * num2;
};
//function types
//we say this variable can only be assigned a function w/ two number params that returns a number  the names of the params don't matter at all.  only the types
var myMultiply;
//no errors here since everything lines up
myMultiply = multiply;
/////////////////////////////////
// OBJECTS in TS
//ts looks as types AND property names for obj
var userData;
//this will work fine b/c property names and values line up
userData = {
    name: "Logan",
    age: 24
};
//note no arrow fn in here b/c value of this is the global'this' since we're not in a class
//we assign this to be of type Complex
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
/////////////////////////////////
// UNION TYPES (allow multiple potential types (ie string OR number))
// use single pipe | for OR
var age2 = 24;
age2 = "24";
///////////////
// RUNTIME check we can use typeof
//but if we set up w/ typescript beforehand we should avoid
//returns a string of the type
///////////////
// NEVER type- pretty rare
// ie for one that throws an error
// its a function that NEVER returns anything (even void/null)  it never returns anything
///////////////
// NULLABLE type-- we can assign type null so that we can later assign value to null to reset it
var canBeNull = 12;
canBeNull = null;
//uninitialzed variable is undefined.  typescript default is any
var canAlsoBeNull;
canAlsoBeNull = null;
