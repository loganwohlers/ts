//using functions and types
//we can specify the return type

let age: number;
age = 24;

let name1: string;
name1 = "logan";

//we can assign the type for the params AND the return type***************
let returnMyName = (str: string): string => {
  return str;
};

//not using arrow syntax
function returnMyName2(str: string): string {
  return str;
}

//void can be used as type for return value of fn's that don't return anything
let sayHi = (): void => {
  console.log("HI!");
};

//specify multiple param types and return type for multiply fn
let multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

//function types
//we say this variable can only be assigned a function w/ two number params that returns a number  the names of the params don't matter at all.  only the types
let myMultiply: (a: number, b: number) => number;

//no errors here since everything lines up
myMultiply = multiply;

/////////////////////////////////
// OBJECTS in TS

//ts looks as types AND property names for obj
let userData: { name: string; age: number };
//this will work fine b/c property names and values line up
userData = {
  name: "Logan",
  age: 24
};

/////////////////////////////////
// COMPLEX TYPES
//we can use type alias
// type Name=type we want-- DOES NOT NEED TO BE NAMED COMPLEX
type Complex = { data: number[]; output: (all: boolean) => number[] };

//note no arraw fn in here b/c value of this is the global'this' since we're not in a class
//we assign this to be of type Complex
let complex: Complex = {
  data: [1, 2, 3],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
console.log(complex.output(true));

/////////////////////////////////
// UNION TYPES (allow multiple potential types (ie string OR number))
// use single pipe | for OR

let age2: number | string = 24;
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
let canBeNull: number | null = 12;
canBeNull = null;

//uninitialzed variable is undefined.  typescript default is any
let canAlsoBeNull;
canAlsoBeNull = null;
