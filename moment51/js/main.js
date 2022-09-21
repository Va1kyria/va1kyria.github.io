/*
Moment 5.1 using AJAX to get the JSON file with xmlhttprequest 
*/

"use strict"

window.addEventListener("load", () => { // upon loading it starts the function below

    let request = new XMLHttpRequest(); // request = AJAX
    request.onreadystatechange= function(){ //when something is happening with the AJAX (loading, done ect) it runs the function
        if (this.readyState === 4 && this.status === 200){ //runs the ajax and if it is okey (200) goes on
            let response = JSON.parse(request.responseText); // turns text to object on response
            let info = document.getElementById("info"); //gets info
            let websites = document.getElementById("sites"); //gets sites
            
            info.innerHTML += "<strong>Namn:</strong>"; //prints information
            info.innerHTML += response.student.information.name;
            info.innerHTML += "<br>"; //new row
            info.innerHTML += "<strong>E-post:</strong>"; 
            info.innerHTML += '<a href="mailto:' + response.student.information.email + '">' + response.student.information.email + "</a>";
            info.innerHTML += "<br>";
            info.innerHTML += "<strong>Webbplats</strong>";
            info.innerHTML += '<a href="' + response.student.information.website + '" target="_blank">' + response.student.information.website + '<br></a>';

            
            for(let i=0;i<response.student.websites.length;i++){ //Loops as long as i is less than the array length
                websites.innerHTML += '<li><a href="'+response.student.websites[i].siteurl+'" target="_blank" title="'+response.student.websites[i].description+'">'+response.student.websites[i].sitename+'</a></li>';

            }
    
        }
    };

    request.open("GET", "https://va1kyria.github.io/moment42/student.json", true); //AJAX connection
    request.send(); //push

});


