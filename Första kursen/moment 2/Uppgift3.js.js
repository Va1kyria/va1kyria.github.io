/*Uppgift 3,  Creating an array with 5 or more colours,
 use a loop to print one for each row, 
 print the number of values in the array
-BY Mikaela frendin*/


"use strict";

let colors = ["pink","Purple","Green","Blue","Turquoise","Yellow"];

    function printColor(color) { //creates a function that prints 
        console.log(color);
    };

colors.forEach(printColor); // makes the function print for each of the colors in the array

console.log("Antal värden: "+colors.length+" stycken"); 






