/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

numbers: are all the numbers including the  menus  ex: -10 -2 1 2 3 4..
Nan: they are also numbers but not behave like them.
strings: are words and are case sensitive.
null: means that the variable doesnt exist.
undefined: means that a variable was declared but is empty
boolean: values that are true or false.


/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

an object is just a collection of properties can be as simple as key with a value
/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/let sum= 12+20;

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/let x = 12



/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

let name = "Pedro"

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

let sub= 4 -x;

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

let name1 = john;
let name2= John

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
