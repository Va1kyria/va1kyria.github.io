// Denna fil ska innehålla er lösning till projektuppgiften.

"use strict";

/*  Delar till ej obligatorisk funktionalitet, som kan ge poäng för högre betyg
*   Radera rader för funktioner du vill visa på webbsidan. */
//document.getElementById("player").style.display = "none";      // Radera denna rad för att visa musikspelare
document.getElementById("shownumrows").style.display = "none"; // Radera denna rad för att visa antal träffar

/* Här under börjar du skriva din JavaScript-kod */

 // Turns the text to object after awaiting respons (gets result from connection)
 

/* När sidan laddat ska den läsa in nedanstående funktioner. Gör en funktion för varje sak som ska görasp*/

window.addEventListener("load", async () => { // upon loading it starts the function below
    let channels = await FetchRadioChannels();// response = fetch JSON (connection)
    await ShowRadioChannels(channels);
});

async function FetchRadioChannels(){
     let request = await fetch("https://api.sr.se/api/v2/channels/?format=JSON");// response = fetch JSON (connection)
     return JSON.parse(await request.text()); // Turns the text to objects and array after awaiting respons (gets result from connection)
};

async function ShowRadioChannels(channels){ //shows channels with 
    let mainnavlist = document.getElementById("mainnavlist");
    for(let i=0;i<channels.channels.length;i++){ //Loops as long as i is less than the arra
        mainnavlist.innerHTML += '<li><a title="'+channels.channels[i].tagline+'" onclick="ShowRadioSchedual('+channels.channels[i].id+');">'+channels.channels[i].name+'</a></li>'
    }    
};

async function FetchRadioSchedual(channelId){
    let request = await fetch("https://api.sr.se/v2/scheduledepisodes?channelid=" + channelId + "&format=JSON&pagination=false");// response = fetch JSON (connection)
    return JSON.parse(await request.text()); // Turns the text to objects and array after awaiting respons (gets result from connection)
};

function FixTime(time){

    let minutes = time.getMinutes(); //gets start minuts
        
    if (minutes < 10){ //adds a 0 before the number if less than 10 
        minutes = '0'+ minutes;
    }

    let hour = time.getHours(); // gets start hour

    if (hour < 10){
        hour = '0'+ hour;
    }
    return hour+':'+minutes;
}

async function ShowRadioSchedual(channelId){
    let schedule = await FetchRadioSchedual(channelId);
    let info = document.getElementById("info");

    info.innerHTML = ''; //Clears the info between the schedules

    for (let i=0;i<schedule.schedule.length;i++){

        let start = eval('new ' + schedule.schedule[i].starttimeutc.replace('/','').replace('/',''));
        let end = eval('new ' + schedule.schedule[i].endtimeutc.replace('/','').replace('/',''));
        if (end < new Date()){
            continue;
        }
        let starttime = FixTime(start);//defines starttime and removes / twice in the data
        
        let endtime = FixTime(end);
        info.innerHTML += '<article>';
        info.innerHTML += '<h3>'+schedule.schedule[i].title+'</h3>';
        if (schedule.schedule[i].subtitle){ //if no value returns nothing
            info.innerHTML += '<h4>'+schedule.schedule[i].subtitle+'</h4>';
        }

        info.innerHTML += '<h5>'+starttime+' - '+endtime+'</h5>';
        info.innerHTML += '<p>';
        info.innerHTML += schedule.schedule[i].description;
        info.innerHTML += '</p>';
        info.innerHTML += '</article>';
    };
};






    /*let info = document.getElementById("info"); //gets info
    let websites = document.getElementById("sites"); //gets sites
    
    info.innerHTML += "<strong>Namn:</strong>"; //prints information
    info.innerHTML += responseJSON.student.information.name;
    info.innerHTML += "<br>"; //new row
    info.innerHTML += "<strong>E-post:</strong>"; 
    info.innerHTML += '<a href="mailto:' + responseJSON.student.information.email + '">' + responseJSON.student.information.email + "</a>";
    info.innerHTML += "<br>";
    info.innerHTML += "<strong>Webbplats</strong>";
    info.innerHTML += '<a href="' + responseJSON.student.information.website + '" target="_blank">' + responseJSON.student.information.website + '<br></a>';
*/


