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
