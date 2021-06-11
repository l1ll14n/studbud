// Task List input form - setting today's date as the input text
//Original code referenced from: https://stackoverflow.com/questions/6982692/how-to-set-input-type-dates-default-value-to-today
var currentDate = new Date();
let today = currentDate.toISOString().substr(0, 10);
document.getElementById("dueDateInputField").outerHTML = '<input type="date" id="tDue" name="dueDate" value="' + today + '" >';

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
}

//Covey Quadrant Frame
var showUITask = document.getElementById("u-i");
var showUNITask = document.getElementById("u-ni");
var showNUITask = document.getElementById("nu-i");
var showNUNITask = document.getElementById("nu-ni");

var taskNumber = 0;

//funcion for rendering task to be displayed via add task function and in the covey quadrants
function renderTask(task){
  // Create HTML elements

  console.log(taskNumber);

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
  itemTimeEstimate.innerHTML = " Time till Done: " + task.amtTimeH + " hr(s) and " + task.amtTimeM + " min(s)" ;
  showTaskList.appendChild(itemTimeEstimate);

  //Completion status of Task 
  let itemComplete = document.createElement("div");
  itemComplete.className = 'class="radioButtons"'
  itemComplete.innerHTML = '<input type="radio" id="notDone" name="completionStatus" value="notDone"></input>' + '<label for="notDone">Not Done</label>' + '<input type="radio" id="done" name="completionStatus" value="done"></input>' + '<label for="done">Done</label>' + "<br>";
  showTaskList.appendChild(itemComplete);
  
  //Add Task (only task name, due date, due Time, and estimated time) to covey quadrants

  //Check days until due in order to determine urgency: if due in more than a week (7 days), task is not urgent. If due in less than a week (in or less than 7 days), task is urgent.
    //Original code referenced from:https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    // One day Time in ms (milliseconds)
    var oneDay = 1000 * 60 * 60 * 24
    // get task due date
    var taskDueDate = new Date(task.dueDate);
    // To Calculate the result in milliseconds and then converting into days
    var Result = Math.round(taskDueDate.getTime() - currentDate.getTime()) / (oneDay);
    // To remove the decimals from the (Result) resulting days value
    var daysTilDue = Result.toFixed(0);

    //to locate task object in covey quadrants to delete both from task list and from covey quadrants (from task list object delete button)
    var whereTask = 0;
    

  //Urgent and important
  //If task is marked as high importance and is due in a week or less, add a corresponding item to Urgent/Important
  if (daysTilDue <= 7 && task.importance == "High"){
      //using div instead of p or another applicable element in order to set css exclusively via class and id
      var uiTask = document.createElement("div");
      uiTask.className='uiElement';
      uiTask.id='uiTaskElement' + taskNumber;
      uiTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      //Extra Task DOM elements
      // let dButton = document.createElement("button");
      // let dButtonText = document.createTextNode("Delete");
      // dButton.appendChild(dButtonText);
      // uiTask.appendChild(dButton);
      let uiTaskDelButton = document.createElement("button");
      uiTaskDelButton.className = "cqDelButton";
      let uiTaskDelButtonText = document.createTextNode("Delete");
      uidelButton.appendChild(uiTaskDelButtonText);
      uiTask.appendChild(uiTaskDelButton);
      

      showUITask.appendChild(uiTask);

      uiTaskDelButton.addEventListener("click", function(event){
        event.preventDefault();
        itemName.remove();
        itemDueInfo.remove();
        itemDescription.remove();
        itemTimeEstimate.remove();
        itemImportance.remove();
        itemComplete.remove();   

        uiTask.remove();
      })
      //set to locate task within covey quadrant sections
      whereTask = 1;
    }
  //Urgent not important
    else if (daysTilDue <= 7 && task.importance != "High"){
      var uniTask = document.createElement("div");
      uniTask.className='uniElement';
      uniTask.id='uniTaskElement' + taskNumber;
      uniTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      let uniTaskDelButton = document.createElement("button");
      let uniTaskDelButtonText = document.createTextNode("Delete");
      uniTaskDelButton.className = "cqDelButton";
      uniTaskDelButton.appendChild(uniTaskDelButtonText);
      uniTask.appendChild(uniTaskDelButton);

      showUNITask.appendChild(uniTask);

      uniTaskDelButton.addEventListener("click", function(event){
        event.preventDefault();
        itemName.remove();
        itemDueInfo.remove();
        itemDescription.remove();
        itemTimeEstimate.remove();
        itemImportance.remove();
        itemComplete.remove();   

        uniTask.remove();       
      })
      whereTask = 2;
    }
  //Not urgent still Important
  //If task is marked as high importance and is due in more than a week, add a corresponding item to Not urgent/Important
    else if (daysTilDue >= 7 && task.importance == "High"){
      var nuiTask = document.createElement("div");
      nuiTask.className='nuiElement';
      nuiTask.id='nuiTaskElement' + taskNumber;
      nuiTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      let nuiTaskDelButton = document.createElement("button");
      nuiTaskDelButton.className = "cqDelButton";
      let nuiTaskDelButtonText = document.createTextNode("Delete");
      delButton.appendChild(nuiTaskDelButtonText);
      nuiTask.appendChild(nuiTaskDelButton);
      
      showNUITask.appendChild(nuiTask);

      nuiTaskDelButton.addEventListener("click", function(event){
        event.preventDefault();
        itemName.remove();
        itemDueInfo.remove();
        itemDescription.remove();
        itemTimeEstimate.remove();
        itemImportance.remove();
        itemComplete.remove();   

        nuiTask.remove();            
      })
      whereTask = 3;
    }
  //Not urgent not important
    else{
      var nuniTask = document.createElement("div");
      nuniTask.className='nuniElement';
      nuniTask.id='nuniTaskElement' + taskNumber;
      nuniTask.innerHTML = "<b>" + task.taskName + "</b>" + "<br>" + "Due on " + "<b>" + task.dueDate + "</b>" + " at " + "<b>" + task.dueTime + "</b>";
      let nuniTaskDelButton = document.createElement("button");
      nuniTaskDelButton.className = "cqDelButton";
      let nuniTaskDelButtonText = document.createTextNode("Delete");
      nuniTaskDelButton.appendChild(nuniTaskDelButtonText);
      nuniTask.appendChild(nuniTaskDelButton);

      showNUNITask.appendChild(nuniTask);

      nuniTaskDelButton.addEventListener("click", function(event){
        event.preventDefault();
        itemName.remove();
        itemDueInfo.remove();
        itemDescription.remove();
        itemTimeEstimate.remove();
        itemImportance.remove();
        itemComplete.remove();   

        nuniTask.remove();       
      })

      whereTask = 4;
    }


    console.log(taskNumber);
      //Extra Task DOM elements - Delete Button for task list display
      let delButton = document.createElement("button");
      delButton.className = "tlDelButton";
      let delButtonText = document.createTextNode("Delete");
      delButton.appendChild(delButtonText);
      itemComplete.appendChild(delButton);
      
      delButton.addEventListener("click", function(event){
        event.preventDefault();
        itemName.remove();
        itemDueInfo.remove();
        itemDescription.remove();
        itemTimeEstimate.remove();
        itemImportance.remove();
        itemComplete.remove();

        //locate corresponding task in covey quadrants and delete
        if (whereTask == 1){
          uiTask.remove();
        } else if (whereTask == 2){
          uniTask.remove();
        } else if (whereTask == 3){
          nuiTask.remove();
        } else {
          nuniTask.remove();
        }

      })


  //Clear Input Form
  form.reset();

  //to correlate with task spot in array
  taskNumber++;

}
