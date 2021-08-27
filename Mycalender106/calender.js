function toggleImportant(){
    console.log("clicked!")
   
   if(important) {
    $('#important').removeClass("fas").addclass("far");
    important = false;  
   } else {
    $('#important').removeClass("fas").addclass("far");
    important = true;
}
}
function save(){
    console.log("Saving Task");

    let tasktitle = $('#textTitle').val();
    let dueDate = $('#textDate').val();
    let location = $('#textLocation').val();
    let priority = $('#selPriority').val();
    let color = $('#selColor').val();
    let contact = $('#textContact').val();
    let description = $('#textDescription').val();
    //hw finish getting variables 
    //create a new task object
    let Event=new Task(important, tasktitle, dueDate, location, priority, color, contact, description)
    //console log the object}
    console.log(Event);
}

function init() {
    console.log("calender system");
    

    $('#important').click(toggleImportant);
    $('#btnSave').click(save);
}
window.onload = init;


