/*Moment 3, This is an assignement to use JavaScript to change a HTML webpage.
The code is supposed to for example; add a task, remove one or all tasks, not approve tasks with less than 5 signs and
to use webbstorage */


"use strict";

var button = document.getElementById("newtodobutton");
var message = document.getElementById("message");
var NewToDo = document.getElementById("newtodo");
var ToDoList = document.getElementById("todolist");
var ClearButton= document.getElementById("clearbutton");

button.addEventListener("click", CreateNewTask); //If button is clicked it creates a new task
ClearButton.addEventListener("click", DeleteAllTasks); // ClearButton delettes all tasks
window.addEventListener("load", LoadPage); //loads the page
newtodo.addEventListener("keyup", CheckItemText);//Checks the length of the text

function CheckItemText(){ //Validates To Do 
    var input = NewToDo.value; 

    if (input === "") {
        message.innerHTML = ""; // gives a message if less than 5 signs 
        button.disabled=true; //Disables the button so the task cant be added
        return false; // jumps out of the function if less than 5
    }
    
    if (input.length < 5) {
        message.innerHTML = "5 signs minimum"; // gives a message if less than 5 signs 
        button.disabled=true; //Disables the button so the task cant be added
        return false; // jumps out of the function if less than 5
    }
    
    button.disabled=false; 
    message.innerHTML =""; //sets the message to empty and enables the button when more than 5 signs
    return true;
};

function LoadPage(){ //loads page
    GetTasksFromWebStorage();
    CheckItemText();
};

function CreateNewTask() { //creates new task
    var input = NewToDo.value; 

    if (CheckItemText() === false){
        return; //jump out of function
    } 

    AddTaskToWebbStorage(input); // execute 
    NewToDo.value=""; // Set textbox to empty
};

function AddTaskToWebbStorage(task){
    let StoredTasks = window.localStorage.tasks;
    
    if (StoredTasks === undefined){ //If tasks in storage is undefined crate array with no content
        StoredTasks = [];
    }
    else {
        StoredTasks=JSON.parse(StoredTasks); //If not undefined use JSON to make it a array 
    }
    StoredTasks.push(task); // Add task to array

    window.localStorage.setItem("tasks", JSON.stringify(StoredTasks)); // Save array in storage under tasks as a string

    GetTasksFromWebStorage(); 
};

function GetTasksFromWebStorage(){
    let StoredTasks = window.localStorage.tasks; 
    if (StoredTasks === undefined){ //If tasks in storage is undefined crate array with no content
        StoredTasks = [];
    }
    else {
        StoredTasks=JSON.parse(StoredTasks); // from string to array
    }
    
    ToDoList.innerHTML= ""; //clear

    StoredTasks.forEach(function(task) { 
    
        let article = document.createElement("article"); //makes the strings clickable

        article.addEventListener("click", DelTask); //if clicked activates DelTask 
        
        article.innerHTML = task;
        
        ToDoList.appendChild(article); //adds article as a child to ToDoList    
    });
};

function DelTask(ClickEvent){
        
    let task = ClickEvent.srcElement.innerHTML; // Tells where the click occured (what article)
    
    let StoredTasks = JSON.parse(window.localStorage.tasks); 
    
    for (let i=0; i<StoredTasks.length; i++){ //As long as "i" is less than length of stored task add one 
        if (StoredTasks[i] === task) { // serchse for the clicked task in StoredTasks, compares them to the clicked task
            let result = StoredTasks.splice(i,1); //slices out i from the array and only i
            window.localStorage.setItem("tasks", JSON.stringify(StoredTasks));//saves in local storage and makes it a string
            break;
        }
    }
    
    GetTasksFromWebStorage(); 
;}

function DeleteAllTasks(){//deletes all tasks in storage
    
    window.localStorage.setItem("tasks", JSON.stringify([])); 

    GetTasksFromWebStorage(); 
};


