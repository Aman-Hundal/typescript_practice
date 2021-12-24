var n = 1; //in TS we define a type using :
// the type is removed in JS after its compiled from TS. Types are not important when Js is running but the step when TS is compiled to JS, types and TS will check for type errors and is important
// n = "Elliot"; //TS will give us a type error when we compile to JS BUT itll compile anyways because TS deems this a small erorr and leaves it to us to fix. The JS file will be compiled and changed.
// by using : any, this will allow for any type assigned to the data - DONT DO ThIS defeats purpose of TS
n = 5; //this will compile with no errors
