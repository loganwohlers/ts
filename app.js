"use strict";
//types we have
//IMPLICIT TYPE ASSIGNING
//strings
//myName is assigned to a string and so typescript shows an error when we reassign it to a #
var myName = "Logan";
// myName = 2;
//numbers (in typescript int/floats are both type number)
var myAge = 24;
// myAge = "24";
//boolean
var alive = true;
// alive = "yes";
// ////////////////////////////
//if we don't assign it's type ANY (like normal JS)- look at the suggestion below.  any is the wildcard type that you should almost never use.  the whole point of typescript is that we WANT to be explicit
var testVar;
testVar = 5;
testVar = "5";
testVar = { 5: "5" };
//EXPLICIT TYPES
// use :type
var myRealAge;
myRealAge = 24;
// myRealAge = "24";
//ARRAYS
//the type allowed inside of the array is implicity assigned here
// let hobbies = ["cooking", "sports"];
// hobbies = [100];
// assign w/ :type[] any, string, etc
var hobbies = ["cooking", "sports", 100];
//TUPLES-
// arrays w/ mixed types and limited length
//lets us have some rly explicit control
//ie this one is an array w/ 2 items, one string and one number
var address = ["street", 314];
//ENUM-- basically just turning our values into numbers-- encoding numbers into more user friendly values (they see the val we use the number in the code)
// we can override the number
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
//we can explicity asign myColor to be the enum type we just made
var myColor = Color.Green;
console.log(myColor);
//when we compile the typescript- all the types are stripped out-- everything just becomes a var.  typescript is about setting up the values before we compile
//ex- the below tuple just becomes a var after compilation into js
// before:let address: [string, number] = ["street", 314];
// after: var address = ["street", 314];
