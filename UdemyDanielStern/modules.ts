// modules are a powerful way to share code between files
// define path to your timesTwo module
/// <reference path = "timesTwo.ts" />
let use = new MyMath.Multiply();
console.log(use.timesTwo(9));

//to combine files in TS, we have to use the outflag when compiling
// tsc.cmd file_one file_two --out modules.js