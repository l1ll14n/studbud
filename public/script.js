// get all of the main buttons
// for each, ad event listener
// on click, 

document.querySelectorAll(".mainbutton").forEach(function(button){
  button.addEventListener('click', function(event){
    document.querySelectorAll('.frame-container').forEach(function(element){
      element.classList.remove('visible')
    })
    console.log('clicked')
    button.classList.toggle('active');
    let buttonId = button.getAttribute('id');
    let containerId = "#"+buttonId+"AllFrame";
    console.log(containerId);
    let frameContainer = document.querySelector(containerId);
    console.log(frameContainer);
    frameContainer.classList.add('visible');

  })
})




// //toggle frames for content
// //Task List frame
// function openToDo() {
//   var toDo = document.getElementById("tlAllFrame");
//   toDo.classList.toggle("toDoAll");

// }

// function closeWelcomeMessage(){
//   var welcomeOff = document.getElementById("welcomeText");
//   welcomeOff.classList.toggle("welcomeHide");
//   welcomeOff.classList.toggle("welcomeShow");
// }

// document.querySelector('#td').addEventListener('click', (e) => {

//   openToDo();
//   closeWelcomeMessage();
  
// });

//Task List Object
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var input = document.getElementById("taskInput");

var taskList = [];

// var task = {
//   name: [],
//   description: [],
//   dueDate: [],
//   dueTime: [],
//   importance: [],
//   amtTime: [],
//   completionStatus: [],
// }

//Task List add to object

button.addEventListener("click", function(event){
    let task = input.value;
    addTask(task1, "task thingy", "1/10/21", "11:59 PM", "High Importance", '7 hours', false)
    console.log.apply(taskList);
})


function addTask(taskName, taskDescription, dueDate, dueTime, importance, amtTime, completionStatus){
    task.name = a;
    task.description = b;
    task.dueDate = c;
    task.dueTime = d;
    task.importance = e;
    task.amtTime = f;
    task.completionStatus = g;
  
    console.log(task);
  
    taskList.push(task);
  
    console.log(taskList);
  
    console.log('Task Added');
    return;
  }


// const form = document.getElementById("taskform");
// const button = document.querySelector("#taskform > button");
// var input = document.getElementById("taskInput");

// // button.addEventListener("click", function(event){
// //   let task = input.value;
// //   addTask(task, )
// // })

// let taskList = [];

// var task = {
//   name: [],
//   description: [],
//   dueDate: [],
//   dueTime: [],
//   importance: [],
//   amtTime: [],
//   complete: [],
// }

// var a = 'name';
// var b = 'description';
// var c = 'due Date';
// var d = 'due Time';
// var e = 'priority';
// var f = 'amount of time needed';
// var g = 'not completed';

// function addTask(a, b, c, d, e, f, g){
//   task.name = a;
//   task.description = b;
//   task.dueDate = c;
//   task.dueTime = d;
//   task.importance = e;
//   task.amtTime = f;
//   task.complete = g;

//   console.log(task);

//   taskList.push(task);

//   console.log(taskList);

//   console.log('Task Added');
//   return;
// }


// addTask(a, b, c, d, e, f, g);
// eventlistener(dfdf, addTask()){
//   addTask(a, b, c, d)
  
// }

// Task HTML: '<form id="taskform">' + '<label for="taskName">Task Name</label>' + '<br>' + '<input type="text" id="taskName" name="task">' + '<label for="taskDueDate">Due Date</label>' + '<br>' + '<input type="date" id="taskDue" name="dueDate" value="2021-05-19">' + '<br>' + '<label for="taskDueTime">Due Time</label>' + '<br>' + '<input type="time" id="taskDueTime" name="appt" min="00:00" max="23:59">' + '<br>' + '<label for="taskDes">Description</label>' + '<br>' + '<input type="text" id="taskDes" name="Description">' + '<br>' + '<label for="taskPriority">Importance</label>' + '<br>' + '<select id="taskPriority" name="important">- Select level -</option>' + '<option value="low">Low</option>' + '<option value="high">High</option>' + '</select>' + '<br>' + '<label for="taskAmtTime">Approximate time to complete</label>' + '<br>' + '<input type="text" id="lname" name="lname">' +'<br>' + '</form>' 




