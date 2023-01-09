/*Uppgift 7, convert minuts to hour and minuts
-BY Mikaela frendin*/


"use strict";

let time = 91;
let hour =(time/60);
let hourRounded = (Math.floor(hour)); //Puts the hour to a full hour rounded downwards
let minuts = (time-(hourRounded*60)); // withdraws the minuts of the hour and gives the minuts 

console.log(hourRounded+" timmar och "+minuts+" minuter");

  









































