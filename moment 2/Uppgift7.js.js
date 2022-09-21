

"use strict";

let animals = ["dog","cat", "Fish", "snake", "elephant", "rat"]; //sets array


    function long_string(array){  // Sorts array in order with longest name first 

        array.sort(function (a,b) {return b.length - a.length}); 

        return array[0];
    };



console.log(long_string(animals)); // Prints the function with animals


