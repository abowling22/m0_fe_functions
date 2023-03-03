// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 


 function greeting(name) {
   return `Howdy, ${name}!`;

 }
 console.log(greeting("bob"))

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `${name}!`;
  
  }
console.log(customGreeting("bob"))

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson (first, middle, last) {
    var name = first + " " + middle + " " + last;
    return `Your name is ${name}`; 
    
  }
  console.log(greetPerson("bob","james","johnson"));
  

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.


function square(num) {
    console.log(Math.sqrt(num));
  }


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
   
function checkStock(quantity, item){
  
    if (quantity === 0) {
      console.log(`${item} - OUT of stock!`)
    } else if (quantity < 4) {
      console.log(`${item} - running LOW`)
    } else {
      console.log(`${item} - is stocked`)
    }
    
  }

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"