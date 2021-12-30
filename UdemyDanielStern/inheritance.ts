class Person {
    name: String;
    constructor(name:String) {
        this.name = name; //can use this. This refers to the object (class instance) that will be ccreated
    }

    // method
    greet(person) {
        console.log(`Hello ${person}`);
    }
}

const elliot = new Person("Elliot");
elliot.greet("Aman")

//inhertiance exmaple

class Athlete extends Person {
    greet(name) { // we are overriding the inherited greet function to a new one
        console.log(`Whats up ${name}`)
        super.greet(name); //access the origin greet method in the Person class. 
    }
}
let crosby = new Athlete("Sidney Crosby");
crosby.greet("Aman");
