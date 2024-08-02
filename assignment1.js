//Q.1 Write a program that defines and logs different data types.
let a = "welcome"; // here we define a string
let b = 77;        // here we define a number
let c = true;      // here we define a boolean
let d = {name: "Sadhvi",
    age: 18,};     // here we define a object
let e = [1, 2, 3, 4, 5];  // here we define a array 
console.log ("value of a:",a, "Type:", typeof a); // this line will print the value and type of a
console.log ("value of b",b, "Type:",typeof b);   // this line will print the value and type of b
console.log ("value of c",c, "Type:",typeof c);   // this line will print the value and type of c
console.log ("value of d",d, "Type:",typeof d);   // this line will print the value and type of d
console.log ("value of e",e, "Type:",typeof e);   // this line will print the value and type of e



//Q.2 Write a program that performs basic arithmetic operations.
let n1 = prompt("enter first number");   //getting the first number from the user
let n2 = prompt("enter second number");  //getting the second nuber from the user
let add = n1 + n2;        //performing the addition operation
console.log(add);         //returning and displaying the result of addition
let subtract = n1 - n2;   //performing the subtraction operation
console.log(subtract);    //returning and displaying the result of subtraction
let multiply = n1*n2;     //performing the multiplication operation
console.log(multiply);    //returning and displaying the result of multiplication
let divide = n1/n2;       //performing the division operation
console.log(divide);      //returning and displaying the result of division



//Q.3 Create a program that checks if a number is positive, negative, or zero.
let num = prompt("enter the number");  //taking the input from the user
if (num > 0){                          //checking if the nuber is greater than 0
    console.log("given number is positive");//if the above statement is true than it will print positive
}
else if (num ==0){ //checking if the entered number is equal to 0
    console.log("given number is 0"); //if the above condition is true than it will print 0
}
else{  //if none of the above condition is true than it will check this condition
    console.log("given number is negative");// and it will display the result as negative
}


//Q.4 Write a program that prints all even numbers from 1 to 20.
let j = 20;                   // giving value 20 to j
for (let i=0; i<=j; i++) {    //using for loop to iterate number till 20
    if (i%2!==0) {             //this line will skip the iteration of odd nubers
        continue;
    }
    console.log(i) //thsi line will print the even numbers till 20
}


//Q.5 Create a program that simulates a simple grading system.
let percent = parseFloat(prompt("Enter your marks :")); //taking input from the user for marks
// parseFloat() converts the string input into a floating-point number.

if (percent >= 90)  //if the marks enterend are 90 or above 90 then print A which means A grade
    {
    console.log("A");
}
 else if (percent >= 80) //This line checks if the value of percent is greater than or equal to 80.

     {
    console.log("B");
} 
else if (percent >= 70) //if the marks enterend are 70 or above 70 then print c which means c grade
    {
    console.log("C");
} 
else if (percent >= 60) //This line checks if the value of percent is greater than or equal to 60.
    {
    console.log("D");
} 
else 
{
    console.log("F");//F will be printed if the marks are below 60
}