// this creates the interface 
interface Person {
    name: String;
    age?: Number;
}

//now lets apply the interface. The below makes the arg being passed to be a person and have person data and traits (like name)
const printName = (hockeyPlayer : Person) => {
    console.log(hockeyPlayer.name);
};

printName({name: "Conor McDavid"});
// below code will not workin JS (will return undefined), however TS will not throw an error when compiling
// printName({label: "Aman"}); // after the interface is set up this will error on compilation of TS to JS

// to avoide the undefined issue - we can use interfaces in TS. We can use interfaces in TS to provide a blueprint for the kind of object we want to accept
// an interface can have any number of paramters and each one should have a key value pair of a TS type. If you add age: Number to the interface, each person must have an age that is a number type when its referenced
// to make a interface paramter optional -> add a question mark like so -> age?: Number
// interfaces are a powerful tool for making our compiled JS more reliable