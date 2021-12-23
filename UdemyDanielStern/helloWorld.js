//TS is a subset of JS, so any JS is legal JS. NOT THE OTHER WAY AROUND
console.log('Hello World'); //valid TS and JS. Compile with tsc helloWorld.ts. This will create a helloWorld.js file in this folder
//TS function
function hello(string) {
    console.log("Hello" + string);
}
// hello(1) this will not allow you to compile this script into JS as we added a String type to the function above. 
hello("Elliot"); // this will compile to JS as "elliot" is a string
