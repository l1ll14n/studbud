const form = document.getElementbyId("taskform");
const button = document.querySelector("#taskform > button");
var input = document.getElementById("taskInput");

button.addEventListener("click", function(event){
  let task = input.value;
  addTask(task, )
})

let taskList = [];

var task = {
  name: [],
  description: [],
  dueDate: [],
  dueTime: [],
  priority: [],
  amtTime: [],
  complete: [],
}

// var a = 'name';
// var b = 'description';
// var c = 'due Date';
// var d = 'due Time';
// var e = 'priority';
// var f = 'amount of time needed';
// var g = 'not completed';

function addTask(a, b, c, d, e, f, g){
  task.name = a;
  task.description = b;
  task.dueDate = c;
  task.dueTime = d;
  task.priority = e;
  task.amtTime = f;
  task.complete = g;

  console.log(task);

  taskList.push(task);

  console.log(taskList);

  console.log('Task Added');
  return;
}

// addTask(a, b, c, d, e, f, g);
// eventlistener(dfdf, addTask()){
//   addTask(a, b, c, d)
  
// }



