//defining a module
var MyMath;
(function (MyMath) {
    var Multiply = /** @class */ (function () {
        function Multiply() {
            this.timesTwo = function (num) {
                return num * 2;
            };
        }
        return Multiply;
    }());
    MyMath.Multiply = Multiply;
})(MyMath || (MyMath = {}));
// modules are a powerful way to share code between files
// define path to your timesTwo module
/// <reference path = "timesTwo.ts" />
var use = new MyMath.Multiply();
console.log(use.timesTwo(9));
//to combine files in TS, we have to use the outflag when compiling
// tsc.cmd file_one file_two --out modules.js
