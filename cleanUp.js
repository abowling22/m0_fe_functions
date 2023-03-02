// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  return ("hello what is your name"); 
}
console.log(askForName());

// What I changed: made the code look cleaner. 
//Used a return statement to output out the 
//text "hello what is your name" when the function is called in the console log


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// added a console log to show the function.  

// EX 3:
function makeFreshPesto(){
  var pestoSteps = [
    "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper",
    "Pulse basil and pine nuts",
    "Add garlic and cheeses",
    "Slowly pour in oil", "Season"
  ];
  for (var i = 0; i < pestoSteps.length; i++) {
    console.log(pestoSteps[i])
  }

}
console.log("these are the steps for making pesto:");
makeFreshPesto();

// Removed the unnecessary console logs, and turned it into a for statement using a string array



//  EX 4:

function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
}
console.log(average(1,2))

// cleaned up the code to be more blocky and easier to read. added a console log to read user inputs through the function