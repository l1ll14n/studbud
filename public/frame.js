//framework for setting up frames
//reference for framework: 
//github riversun link
const jsFrame = new JSFrame();

//references for checking if windows exist so you can't have more than one window of each type open at once
//Task List frame check references
var tlFrame;
var tlWindowExists;

//Covey Quad refs
var cqFrame;
var cqWindowExists;

//Stopwatch refs
var swFrame;
var swWindowExists;

//Pomodoro refs
var pFrame;
var pWindowExists;

//Stream Selection refs
var sFrame;
var sWindowExists;

//Music Controller refs
var cFrame;
var cWindowExists;

//Reading List folder refs
var fFrame;
var fWindowExists;

//Reading List links refs
var lFrame;
var lWindowsExists;


//Task List frame open via Task List Button

function taskListFrameFunc(){
    {
        //making resize area larger
        // const appearance1 = jsFrame.createFrameAppearance();

        // appearance1.resizeAreaVisible = true;

        // //The offset distance between the resize area and the window border.
        // appearance1.resizeAreaOffset = -20;// default is -10

        // //Thickness of the horizontal resizing area
        // appearance1.resizeAreaWidth = 40;// default is 20

        // //Thickness of the vertical resize area
        // appearance1.resizeAreaHeight = 40;// default is 20
        const taskListFrame = jsFrame.create({
            name: `Task List`,
            title: `Task List`,
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden',
                html: '<button id="bt_open" type="button" class="btn btn-primary" style="font-size:20px;width:200px;height:100px;color:black;padding:10px;margin:10px;">Add Task</button>',
            },
            // html: '<div id="message" style="padding:10px;font-size:16px;color:darkgray;">You can adjust the sensitivity (fine-tune the size of the resizing area) when resizing with the mouse or touch.</div>',
            resizable: true,
            // appearance: appearance1
        }).show();
        taskListFrame.setPosition(50, 100);

    }
}

document.querySelector('#task').addEventListener('click', (e) => {
    const tl = 'Task List';
    tlFrame = jsFrame.getWindowByName(tl);
    tlWindowExists = jsFrame.containsWindowName(tl);
    
    if (!tlWindowExists){
        taskListFrameFunc();
    } else {
        console.log('Already Exists');
    }
    
});

//Covey Quadrant frame opened by Covey Quadrant Button

function coveyQuadFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const coveyQuadFrame = jsFrame.create({
            name: 'Covey Quadrants',
            title: 'Covey Quadrants',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden',
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        coveyQuadFrame.setPosition(50, 100);
    
    }
}

document.querySelector('#covey').addEventListener('click', (e) => {
    const cq = 'Covey Quadrants';
    cqFrame = jsFrame.getWindowByName(cq);
    cqWindowExists = jsFrame.containsWindowName(cq);
        
    if (!cqWindowExists){
        coveyQuadFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});
    
//Stopwatch frame opened by Stopwatch Button

function stopWatchFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;
        const stopWatchFrame = jsFrame.create({
            name: 'Stopwatch',
            title: 'Stopwatch',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        stopWatchFrame.setPosition(100, 200);
    }

}

document.querySelector('#stopwatch').addEventListener('click', (e) => {
    const sw = 'Stopwatch';
    swFrame = jsFrame.getWindowByName(sw);
    swWindowExists = jsFrame.containsWindowName(sw);
        
    if (!swWindowExists){
        stopWatchFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Pomodoro triggered by Pomodoro Button

function pomodoroFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const pomodoroFrame = jsFrame.create({
            name: 'Pomodoro Timer',
            title: 'Pomodoro Timer',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        pomodoroFrame.setPosition(600, 200);
        
    }

}

document.querySelector('#pomodoro').addEventListener('click', (e) => {
    const p = 'Pomodoro Timer';
    pFrame = jsFrame.getWindowByName(p);
    pWindowExists = jsFrame.containsWindowName(p);
        
    if (!pWindowExists){
        pomodoroFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Music Stream Selector triggered by Stream Button

function musicSelectFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const musicStreams = jsFrame.create({
            name: 'Lofi Streams',
            title: 'Lofi Streams',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        musicStreams.setPosition(100, 200);
    }
}

document.querySelector('#stream').addEventListener('click', (e) => {
    const s = 'Lofi Streams';
    sFrame = jsFrame.getWindowByName(s);
    sWindowExists = jsFrame.containsWindowName(s);
        
    if (!sWindowExists){
        musicSelectFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

function musicControlFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const musicPlayer = jsFrame.create({
            name: 'Music Controller',
            title: 'Music Controller',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
        resizable: true,
        // appearance: appearance1
        }).show();
        musicPlayer.setPosition(600, 200);
    }

}

document.querySelector('#control').addEventListener('click', (e) => {
    const c = 'Music Controller';
    cFrame = jsFrame.getWindowByName(c);
    cWindowExists = jsFrame.containsWindowName(c);
        
    if (!cWindowExists){
        musicControlFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Reading List Folders
function folderFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const folders = jsFrame.create({
            name: 'Folders',
            title: 'Folders',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        folders.setPosition(100, 200);
    }
}

document.querySelector('#folder').addEventListener('click', (e) => {
    const f = 'Folders';
    fFrame = jsFrame.getWindowByName(f);
    fWindowExists = jsFrame.containsWindowName(f);
        
    if (!fWindowExists){
        folderFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});


//Reading List Folders
function linkFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const readLinks = jsFrame.create({
            name: 'Links',
            title: 'Links',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
            readLinks.setPosition(600, 200);
        }

    }

    document.querySelector('#link').addEventListener('click', (e) => {
        const l = 'Links';
        lFrame = jsFrame.getWindowByName(l);
        lWindowExists = jsFrame.containsWindowName(l);
            
        if (!fWindowExists){
            linkFrameFunc();
        } else {
            console.log('Already Exists');
        }
            
    });
    
