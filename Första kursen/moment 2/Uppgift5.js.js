/*Uppgift 5, creating a function that prints the multiplication table of any given number
-BY Mikaela frendin*/

"use strict";


function multiplication(input) {
    let table = 1;
        while (table < 11) {
            console.log(table+"*"+input+ "=" +(table * input) ); // makes a loop of 10 times
            table++; // makes the loop add one to each loop 1-2 2-3 3-4 and so on
        };
};


multiplication(5);
