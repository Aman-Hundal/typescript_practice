var n = 1; //in TS we define a type using :
// the type is removed in JS after its compiled from TS. Types are not important when Js is running but the step when TS is compiled to JS, types and TS will check for type errors and is important
// n = "Elliot"; //TS will give us a type error when we compile to JS BUT itll compile anyways because TS deems this a small erorr and leaves it to us to fix. The JS file will be compiled and changed.
// by using : any, this will allow for any type assigned to the data - DONT DO ThIS defeats purpose of TS
n = 5; //this will compile with no errors
//boolean type example
var isWinter = false; // : boolean will lock the data to true or false, below code will not compile to js
// isWinter = 123;
//number type example
var count = 5;
count = 5 + 1;
console.log(count);
//string type example
var myName = "Jon";
// array type exmaple
//an array is defined as a vector in ts. vector = an array contining only elms of the speicficed type
var names = ['Jon', 'Ned', 'Robb'];
// above sets an array that can only contain strings. Can use : any[] as well to have an array of any type of elms
//enum type example. An enum is an easy way to store built in variables
var Movies;
(function (Movies) {
    Movies[Movies["TheKing"] = 0] = "TheKing";
    Movies[Movies["Troy"] = 1] = "Troy";
    Movies[Movies["Gladiator"] = 2] = "Gladiator";
})(Movies || (Movies = {})); //this is a set of strings/keys we can refer to
var movie = Movies.Troy;
// movie is now equal to troy
//voide type example. Void is the type that is equal to nthing. Used at the end of a function generally.
function getName() {
    //return "Aman" // this will cause a compiling error and will not work in TS
    console.log("Aman");
}
// void type is used when a function does not return anything.
//can use capital or lower case when referring to the basic/default types
