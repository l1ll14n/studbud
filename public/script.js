//Original code referenced from: https://stackoverflow.com/questions/6982692/how-to-set-input-type-dates-default-value-to-today
//setting selector text for date input in form
var currentDate = new Date();
let today = currentDate.toISOString().substr(0, 10);
document.getElementById("dueDateInputField").outerHTML =
    '<input type="date" id="tDue" name="dueDate" value="' + today + '" >';

// get all of the main buttons
// for each, ad event listener
// on click, hide all other frames and show clicked button frame

document.querySelectorAll(".mainbutton").forEach(function(button){
  button.addEventListener('click', function(event){
    document.getElementById('welcomeText').classList.add('hidden');
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

//Task List Object
const form = document.getElementById("taskform");
const formbutton = document.querySelector("#taskform > button");
var taskNameInput = document.getElementById("tName");
var dueDateInput = document.getElementById("tDue");
var dueTimeInput = document.getElementById("tDueTime");
var taskDesInput = document.getElementById("tDes");
var taskPriorityInput = document.getElementById("tPriority");
var taskTimeH = document.getElementById("tTimeH");
var taskTimeM = document.getElementById("tTimeM");

//Task List Frame
var showTaskList = document.getElementById("tlShowFrame");

//Covey Quadrant Frame
var showUITask = document.getElementById("u-i");
var showUNITask = document.getElementById("u-ni");
var showNUITask = document.getElementById("nu-i");
var showNUNITask = document.getElementById("nu-ni");

// Event listener for adding a task via task form
formbutton.addEventListener("click", function(event){
  event.preventDefault();
  let taskName = taskNameInput.value;
  let dueDate = dueDateInput.value;
  let dueTime = dueTimeInput.value;
  let description = taskDesInput.value;
  let importance = taskPriorityInput.value;
  let amtTimeH = taskTimeH.value;
  let amtTimeM = taskTimeM.value;
  addTask(taskName, dueDate, dueTime, description, importance, amtTimeH, amtTimeM, false);
  console.log(taskListArray);
})

var taskListArray = [];

// Function for adding a task to the array of tasks and adding each added task to the task list as html
function addTask(taskName, dueDate, dueTime, description, importance, amtTimeH, amtTimeM, completionStatus){
  let task = {
    taskName,
    dueDate,
    dueTime,
    description,
    importance,
    amtTimeH,
    amtTimeM,
    completionStatus
  }

  taskListArray.push(task);
  renderTask(task);

  //Add to task list (add radio button when task list is added (adding delete button to each task in adding functionality video)

  //Add to covey quadrants
}

//funcion for rendering task to be displayed via add task function
function renderTask(task){
  // Create HTML elements

  //Task Title
  let itemName = document.createElement("h3");
  itemName.innerHTML = task.taskName;
  showTaskList.appendChild(itemName);

  //Task Due Date and Time
  let itemDueInfo = document.createElement("li");
  itemDueInfo.innerHTML = "<b>" + task.dueDate + " at " + task.dueTime + "</b>";
  showTaskList.appendChild(itemDueInfo);

  //Description of Task
  let itemDescription = document.createElement("li");
  itemDescription.innerHTML = task.description;
  showTaskList.appendChild(itemDescription);

  //Importance of Task
  let itemImportance = document.createElement("li");
  itemImportance.innerHTML = task.importance + " importance";
  showTaskList.appendChild(itemImportance);
  
  //Estimated time of completion of Task
  //Hours
  let itemTimeEstimate = document.createElement("li");
  itemTimeEstimate.innerHTML = " Time till Done: " + task.amtTimeH + " hr(s) and " + task.amtTimeM + " min(s)";
  showTaskList.appendChild(itemTimeEstimate);

  //Completion status of Task 
  let itemComplete = document.createElement("div");
  itemComplete.className = 'class="radioButtons"'
  itemComplete.innerHTML = '<input type="radio" id="notDone" name="completionStatus" value="notDone"></input>' + '<label for="notDone">Not Done</label>' + '<input type="radio" id="done" name="completionStatus" value="done"></input>' + '<label for="done">Done</label>';
  showTaskList.appendChild(itemComplete);


  //Add Task (only task name, due date, due Time, and estimated time) to covey quadrants

  //Check days until due in order to determine urgency: if due in more than a week (7 days), task is not urgent. If due in less than a week (in or less than 7 days), task is urgent.
    //Original code referenced from:https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    // One day Time in ms (milliseconds)
    var oneDay = 1000 * 60 * 60 * 24
      // 0-11 is Month in JavaScript
    var taskDueDate = new Date(task.dueDate);
    // To Calculate the result in milliseconds and then converting into days
    var Result = Math.round(taskDueDate.getTime() - currentDate.getTime()) / (oneDay);
    // To remove the decimals from the (Result) resulting days value
    var daysTilDue = Result.toFixed(0);
    //To display the final_result value
    console.log(daysTilDue);

  //Urgent and important
  //If task is marked as high importance and is due in a week or less, add a corresponding item to Urgent/Important
    if (daysTilDue <= 7 && task.importance == "High"){
      //using div instead of p or another applicable element in order to set css exclusively via class and id
      let uiTask = document.createElement("div");
      uiTask.className='rankedTaskElement';
      uiTask.id='uiTaskElement';
      uiTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      showUITask.appendChild(uiTask);
    }
  //Urgent not important
    else if (daysTilDue <= 7 && task.importance != "High"){
      let uniTask = document.createElement("div");
      uniTask.className='rankedTaskElement';
      uniTask.id='uiTaskElement';
      uniTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      showUNITask.appendChild(uniTask);
    }
  //Not urgent still Important
  //If task is marked as high importance and is due in more than a week, add a corresponding item to Not urgent/Important
    else if (daysTilDue >= 7 && task.importance == "High"){
      let nuiTask = document.createElement("div");
      nuiTask.className='rankedTaskElement';
      nuiTask.id='uiTaskElement';
      nuiTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      showNUITask.appendChild(nuiTask);
    }
  //Not urgent not important
    else{
      let nuniTask = document.createElement("div");
      nuniTask.className='rankedTaskElement';
      nuniTask.id='uiTaskElement';
      nuniTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      showNUNITask.appendChild(nuniTask);
    }

  //Extra Task DOM elements

  //Event listeners for DOM elements

  //Clear Input Form

}



//If Task is marked as complete by user, delete it from task list and covey quadrants
// function taskComplete(){
//   get
// }

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




