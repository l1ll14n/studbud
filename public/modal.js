//Add Task Modal

    function openModalWindow() {
        const jsFrame = new JSFrame();
        const innerHTML = '<div class="modal-header">' +
            '<h6 class="modal-title">Add Task to Task List</h6>' +
            '</div>' + '<form id="taskform">' + '<label for="taskName">Task Name</label>' + '<br>' + '<input type="text" id="taskName" name="task">' + '<label for="taskDueDate">Due Date</label>' + '<br>' + '<input type="date" id="taskDue" name="dueDate" value="2021-05-19">' + '<br>' + '<label for="taskDueTime">Due Time</label>' + '<br>' + '<input type="time" id="taskDueTime" name="appt" min="00:00" max="23:59">' + '<br>' + '<label for="taskDes">Description</label>' + '<br>' + '<input type="text" id="taskDes" name="Description">' + '<br>' + '<label for="taskPriority">Importance</label>' + '<br>' + '<select id="taskPriority" name="important">- Select level -</option>' + '<option value="low">Low</option>' + '<option value="high">High</option>' + '</select>' + '<br>' + '<label for="taskAmtTime">Approximate time to complete</label>' + '<br>' + '<input type="text" id="lname" name="lname">' +'<br>' + '</form>' +
            '<div class="modal-footer">' +
            '<button id="bt_submit" type="button" class="btn btn-outline-primary">OK</button>' +
            '<button id="bt_cancel" type="button" class="btn btn-outline-secondary">Cancel</button>' +
            '</div>';

        const modalFrame = jsFrame.create({
            name: 'Add Task',
            title: 'Add Task',
            left: 0, top: 0, width: 320, height: 320,
            movable: true,
            resizable: true,
            html: innerHTML
        });
        //Place window in the center
        modalFrame.setPosition(window.innerWidth / 2, window.innerHeight / 2, 'CENTER_BOTTOM');


        //Handling the button's click event
        modalFrame.on('#bt_submit', 'click', (_frame, e) => {
            _frame.extra = {
                result: 'submitted'
            }
            _frame.closeFrame();
        });
        modalFrame.on('#bt_cancel', 'click', (_frame, e) => {
            //You can also get frame object from JSFrame object.
            var _frame = jsFrame.getWindowByName('Add Task');
            _frame.extra = {
                result: 'canceled'
            }
            _frame.closeFrame();
        });

        //Open as modal window
        modalFrame.showModal(_frame => {
            //You can get callback when closing the modal window
            jsFrame.showToast({
                html: `${_frame.getName()} is closed.The result is ${_frame.extra.result}`,
                align: 'center',
                duration: 2000
            });
        });

    }

    var buttonElement = document.getElementById('bt_open');
    buttonElement.addEventListener('click', (e) => {
        openModalWindow();
    });
    


