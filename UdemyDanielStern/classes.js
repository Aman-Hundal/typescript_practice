// create a class
var Athlete = /** @class */ (function () {
    function Athlete() {
        this.name = "Aman";
        this.number = 88; //this gives the number property default t0 88. You can also apply a default property in the TS assignment above (see string)
    }
    //method
    Athlete.prototype.hello = function (person) {
        console.log("Hello ".concat(person));
    };
    Athlete.species = "Human";
    return Athlete;
}());
// creates instance of above class
var ovechkin = new Athlete();
// lets try to add a property to the ovechkin object. This will error out as the number method does not exist on the Athlete class
ovechkin.number = 08;
//classes can also have constructor properties which is a function when the class runs. see above
// classes can also have static properties. statoc properties are accessible from the class blueprint 
console.log(Athlete.species); //this will compiled from TS to JS fine and work in JS fine
// classes can have methods which are not in the constructor. lets add one above to the class
ovechkin.hello("Aman");
