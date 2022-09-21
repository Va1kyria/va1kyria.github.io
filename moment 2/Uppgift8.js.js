/*uppgift 8, printa ut datum och tid i 3 olika format med hjälp av en funktion som heter 
printDateAndTime och som anropas 3 gånger med siffror som argument */

"use strict";

function printDateAndTime(option1){

    let d = new Date();
    let minuts = d.getMinutes();
    let hour = d.getHours();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let weekday = d.getDay();
    let mo =month++ // Sets the month to the right number (otherwise it is -1 )

        function PrintZero(z){ //puts the 0 in front of the number when less than 10
   
            if (z < 10) {
                return "0"+z;
            }   
            else {
                    return z;
            };
        };

        function MonthString(ms){ // Gives a name to the number of month 
            
            if (ms === 1){
                return "Januari";
            };
            if (ms === 2){
                return "Februari";
            };
            if (ms === 3){
                return "Mars";
            };
            if (ms === 4){
                return "April";
            };  
            if (ms === 5){
                return "Maj";
            };
            if (ms === 6){
                return "Juni";
            };
            if (ms === 7){
                return "Juli";
            };
            if (ms === 8){
                return "Augusti";
            };
            if (ms === 9){
                return "September";
            };
            if (ms === 10){
                return "Oktober";
            };
            if (ms === 11){
                return "November";
            };
            if (ms === 0){
                return "December";
            };
        }
        
        function week(w){  // Gives a weekday name
            if (w === 1){
                return "Måndag";
            };
            if (w === 2){
                return "Tisdag";
            };
            if (w === 3){
                return "Onsdag";
            };
            if (w === 4){
                return "Torsdag";
            };
            if (w === 5){
                return "Fredag";
            };
            if (w === 6){
                return "Lördag";
            };
            if (w === 0){
                return "Söndag";
            };
        }    
        

    let format1 = hour+":" + minuts + ", "+ year+"-"+PrintZero(month)+"-"+PrintZero(day);
    let format2 = MonthString(month)+" " + PrintZero(day)+", "+year+" - "+hour+":"+minuts;
    let format3 = week(weekday)+" "+day+"/"+month+", kl. "+hour+"."+minuts;


        if (option1 === 1)  //Gives a number as argument to the function 
        console.log(format1);
        if (option1 === 2)
        console.log(format2);
        if (option1 === 3)
        console.log(format3);

}    


printDateAndTime(1);
printDateAndTime(2);
printDateAndTime(3);

