// This is the final assigement for the course to show what I have learnt 

"use strict";


async function FetchRadioChannelById(id){ // gets information about the channels and if no value of how many it fetches all
    let url =  "https://api.sr.se/api/v2/channels/"+id+"?format=JSON";
    let request = await fetch(url);// response = fetch JSON (connection)
     return JSON.parse(await request.text()); // Turns the text to objects and array after awaiting respons (gets result from connection)
};

window.addEventListener("load", async () => { // upon loading it starts the function below 
    
    await ShowRadioChannels(10);
    let numrows = document.getElementById('numrows'); // gets element numrows

    await ShowChannelsDropdown();
    ShowAllSchedules();

    numrows.addEventListener('change', async (event) => { //adds an event om change
        let NoOfChannels = event.target.value;
        await ShowRadioChannels(NoOfChannels);
    });

    let playbutton = document.getElementById('playbutton')
    playbutton.addEventListener("click", async () => {
        let id = document.getElementById("playchannel").value;
        let channel = await FetchRadioChannelById(id);
        let player = document.getElementById('radioplayer');
        player.innerHTML= '<audio controls="" autoplay=""><source src="'+channel.channel.liveaudio.url+'" type="audio/mpeg"></audio>';
    });
});

async function FetchAllSchedules(channelId){ 

    let request = await fetch("https://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=" + channelId + "&format=json&indent=true&pagination=false");
    return JSON.parse(await request.text());
  
};

async function ShowAllSchedules(){
    
    let info = document.getElementById("info");
    info.innerHTML = "";
    
    for(let i=0;i<window.AllChannels.channels.length;i++){ //Loops as long as i is less than the array
    
        info.innerHTML += '<article>';
        info.innerHTML += '<H3>'+window.AllChannels.channels[i].name+'</H3>';
        let channelInfo = await FetchAllSchedules(window.AllChannels.channels[i].id);
        if (!channelInfo.channel.currentscheduledepisode){
            continue;
        }
        if (channelInfo.channel.currentscheduledepisode.title){
        info.innerHTML += '<H5>'+channelInfo.channel.currentscheduledepisode.title+'</H5>';
        }     
        if (channelInfo.channel.currentscheduledepisode.subtitle){
        info.innerHTML += channelInfo.channel.currentscheduledepisode.subtitle; 
        }   
    
    info.innerHTML += '</article>';
    };
};


async function FetchRadioChannels(Numb){ // gets information about the channels and if no value of how many it fetches all
    let url =  "https://api.sr.se/api/v2/channels/?format=JSON";
    if (Numb) {
        url += "&size="+Numb; // for ShowRadioChannels
    }
    else {
        url += '&pagination=false'; // gives the dropdown list all channels 
    }
    let request = await fetch(url);// response = fetch JSON (connection)
     return JSON.parse(await request.text()); // Turns the text to objects and array after awaiting respons (gets result from connection)
};

async function ShowRadioChannels(Numb){ //shows channels with 
    let channels = await FetchRadioChannels(Numb);// response = fetch JSON (connection)
    let mainnavlist = document.getElementById("mainnavlist");
    mainnavlist.innerHTML = "";
    for(let i=0;i<channels.channels.length;i++){ //Loops as long as i is less than the array
        mainnavlist.innerHTML += '<li><a title="'+channels.channels[i].tagline+'" onclick="ShowRadioSchedual('+channels.channels[i].id+');">'+channels.channels[i].name+'</a></li>';
    };    
};

async function ShowChannelsDropdown(){ //shows channels with 
    window.AllChannels = await FetchRadioChannels();// response = fetch JSON (connection)
    let playchannel = document.getElementById("playchannel");
    playchannel.innerHTML = ""; 
    for(let i=0;i<window.AllChannels.channels.length;i++){ //Loops as long as i is less than the array
        playchannel.innerHTML += '<option value="'+window.AllChannels.channels[i].id+'">'+window.AllChannels.channels[i].name+'</option>';
    };    
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
};

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