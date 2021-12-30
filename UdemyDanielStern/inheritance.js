var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name; //can use this. This refers to the object (class instance) that will be ccreated
    }
    // method
    Person.prototype.greet = function (person) {
        console.log("Hello ".concat(person));
    };
    return Person;
}());
var elliot = new Person("Elliot");
elliot.greet("Aman");
//inhertiance exmaple
var Athlete = /** @class */ (function (_super) {
    __extends(Athlete, _super);
    function Athlete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Athlete.prototype.greet = function (name) {
        console.log("Whats up ".concat(name));
        _super.prototype.greet.call(this, name);
    };
    return Athlete;
}(Person));
var crosby = new Athlete("Sidney Crosby");
crosby.greet("Aman");
