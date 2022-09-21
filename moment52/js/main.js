/*
Moment 5.2 using AJAX to get the JSON file with fetch API 
*/

"use strict"

window.addEventListener("load", async () => { // upon loading it starts the function below
    let response = await fetch("https://va1kyria.github.io/moment42/student.json");// response = fetch JSON (connection)
    let responseJSON = JSON.parse(await response.text()); // Turns the text to object after awaiting respons (gets result from connection)

    let info = document.getElementById("info"); //gets info
    let websites = document.getElementById("sites"); //gets sites
    
    info.innerHTML += "<strong>Namn:</strong>"; //prints information
    info.innerHTML += responseJSON.student.information.name;
    info.innerHTML += "<br>"; //new row
    info.innerHTML += "<strong>E-post:</strong>"; 
    info.innerHTML += '<a href="mailto:' + responseJSON.student.information.email + '">' + responseJSON.student.information.email + "</a>";
    info.innerHTML += "<br>";
    info.innerHTML += "<strong>Webbplats</strong>";
    info.innerHTML += '<a href="' + responseJSON.student.information.website + '" target="_blank">' + responseJSON.student.information.website + '<br></a>';

    for(let i=0;i<responseJSON.student.websites.length;i++){ //Loops as long as i is less than the array length
        websites.innerHTML += '<li><a href="'+responseJSON.student.websites[i].siteurl+'" target="_blank" title="'+responseJSON.student.websites[i].description+'">'+responseJSON.student.websites[i].sitename+'</a></li>';
    }
});