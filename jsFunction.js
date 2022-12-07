/* A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/

{
    function myFunction(p1, p2) {
        return p1 * p2;
      }
    const result = myFunction(2,3)
    console.log(result);
}

/*
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

/*

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
You will learn a lot more about function invocation later in this tutorial.

*/

/*
Function Return
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":

*/

/*
Why Functions?
You can reuse code: Define the code once, and use it many times.
You can use the same code many times with different arguments, to produce different results.
*/


{
    function toCelsius(f) {
        return (5/9) * (f-32);
      }
    const result = toCelsius;
    console.log(result) // this will return the toCelsius function
}