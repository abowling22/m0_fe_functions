// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"


"Hello World".toLowerCase();


"Hello World".includes("Hello");
// includes is calling on the string to see if the word hello is inclded in it.
// there are no arguments includes has one job and thats to look for hello
//the return value is true becae use "Hello World" includes the word Hello


"Hello World".endsWith("Hello");
// endsWith is calling on the string "Hello World" to see if it ends with the word "Hello"
// No arguments are passed; endsWith has one job and thats to look for Hello at the end of the string "Hello World"
// the return value is false because the string "Hello World" 

"Hello World".endsWith("rld");
// like the above endsWith is calling on the string "Hello World" but this time its looking for rld
// No arguments endsWith is simply looking for "rld"
// the return value is true because the string "Hello World" ends with rld


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.

// var firstName = "Jeff";
// console.log(firstName.startsWith("J"));

var color = "purple";

console.log(color.toUpperCase());
// the toUpperCase() method is called on the color variable, which stores the string object "purple"
// the toUpperCase() method is returning a string value converted to uppercase 
// because purple is a string already, the method doesnt convert it. However if the element isn't a string itll be converted into one

var phrase = "learning is fun"

console.log(phrase.endsWith("fun"));




// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var phrases = ["red", "blue", "yellow"]


console.log(phrases.sort());
// sorts the elements in the array and sorts them in alphabetical order

var firstName = ["d","r","e","w"]

console.log(firstName.join(``))
// this is joining the strings together 
