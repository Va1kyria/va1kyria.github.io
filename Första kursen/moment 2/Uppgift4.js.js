/*Uppgift 4,  Creating a loop that prints the uneaven numbers 
between 3 and 23, there is a requirement to use the modulus operator for this
-BY Mikaela frendin*/


"use strict";


let number = 1;

while (number < 24) { //Creates a loop for all numbers above one and below 24 
    if (number++ % 2 === 0)  { //Tells the loop to look for uneaven numbers  and in the next step to print them 
        console.log(number);
    };
   
};







