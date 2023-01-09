/*
Moment 4.1 
This is an assignement o create a library of movies and to have them published to the
website without overwriting the post before
*/

"use strict"

let movie1 = {
    title: "No man No child",
    category: "Drama",
    playtime: 90,
    getinformation: function(){ //creates a function that returns all information as i want it represenated
        return this.title +", " + this.category+", " + this.playtime+ " minuter";
    }
};

let movie2 = {
    title: "Universe and You",
    category: "Documentary",
    playtime: 100, 
    getinformation: function(){
        return this.title +", " + this.category+", " + this.playtime+ " minuter" ;   
    }
};

let movie3 = {
    title: "Bloodrain",
    category: "Action",
    playtime: 123,
    getinformation: function(){
        return this.title +", " + this.category+", " + this.playtime+ " minuter";   
    }
};

let movie4 = {
    title: "Joe",
    category: "Comedy",
    playtime: 96,
    getinformation: function(){
        return this.title +", " + this.category+", " + this.playtime+ " minuter";    
    }
};

let output = document.getElementById("output");

output.innerHTML+=movie1.getinformation()+"\n";//gets movie one in the order described by the function getinformation()
output.innerHTML+=movie2.getinformation()+"\n";//also adds a new row 
output.innerHTML+=movie3.getinformation()+"\n";
output.innerHTML+=movie4.getinformation()+"\n";



