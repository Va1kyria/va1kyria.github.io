
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


