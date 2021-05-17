const jsFrame = new JSFrame();


    

//Task List and Covey Quadrant triggered by respective buttons
function taskListFunc(){
    {
        //making resize area larger
        const appearance1 = jsFrame.createFrameAppearance();

        //The offset distance between the resize area and the window border.
        appearance1.resizeAreaOffset = -20;// default is -10

        //Thickness of the horizontal resizing area
        appearance1.resizeAreaWidth = 40;// default is 20

        //Thickness of the vertical resize area
        appearance1.resizeAreaHeight = 40;// default is 20
        const taskListFrame = jsFrame.create({
            name: `TaskList`,
            title: `TaskList`,
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        taskListFrame.setPosition(50, 100);
        const tl='TaskList';
        const tlExists=jsFrame.containsWindowName(tl);
        const tlFrame=jsFrame.getWindowByName(tl);
        if (!tlExists){
            taskListFrame.show();
        } else {
            tlFrame;
        }
    }
}
document.querySelector('#task').addEventListener('click', (e) => {
    taskListFunc();
});

{
    const appearance1 = jsFrame.createFrameAppearance();
    appearance1.resizeAreaOffset = -20;
    appearance1.resizeAreaWidth = 40;
    appearance1.resizeAreaHeight = 40;

    const coveyQuad = jsFrame.create({
        name: 'Covey Quadrants',
        title: 'Covey Quadrants',
        left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
        style: {
            backgroundColor: 'rgba(255,255,255,1.0)',
            overflow: 'hidden'
        },
        resizable: true,
        appearance: appearance1
    })
    coveyQuad.setPosition(125, 50);
    //open Covey Quadrant windown when 
    document.querySelector('#covey').addEventListener('click', (e) => {
        coveyQuad.show();
    });
}
document.addEventListener('click', (e) => {
    toDoWindows();
});


// document.querySelector('#todo').addEventListener('click', (e) => {
//     toDoWindows();
// });


//Timer and Pomedoro triggered by Manage Time button
function manageWindows(){
    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;
        const timer = jsFrame.create({
            name: 'Timer',
            title: 'Timer',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        timer.setPosition(100, 200);
        timer.show();
    }

    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;

        const pomodoro = jsFrame.create({
            name: 'Pomodoro Timer',
            title: 'Pomodoro Timer',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        pomodoro.setPosition(600, 200);
        pomodoro.show();
    }

}

document.querySelector('#manage').addEventListener('click', (e) => {
    manageWindows();
});

//Music Player
function musicWindows(){
    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;
        const musicStreams = jsFrame.create({
            name: 'Lofi Streams',
            title: 'Lofi Streams',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        musicStreams.setPosition(100, 200);
        musicStreams.show();
    }

    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;

        const musicPlayer = jsFrame.create({
            name: 'Music Controller',
            title: 'Music Controller',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        musicPlayer.setPosition(600, 200);
        musicPlayer.show();
    }

}

document.querySelector('#music').addEventListener('click', (e) => {
    musicWindows();
});

//Reading List
function readWindows(){
    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;
        const folders = jsFrame.create({
            name: 'Folders',
            title: 'Folders',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        folders.setPosition(100, 200);
        folders.show();
    }

    {
        const appearance1 = jsFrame.createFrameAppearance();
        appearance1.resizeAreaOffset = -20;
        appearance1.resizeAreaWidth = 40;
        appearance1.resizeAreaHeight = 40;

        const readingLinks = jsFrame.create({
            name: 'Links',
            title: 'Links',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            appearance: appearance1
        })
        readingLinks.setPosition(600, 200);
        readingLinks.show();
    }

}

document.querySelector('#read').addEventListener('click', (e) => {
    readWindows();
});

// function shutItDo

// document.querySelector('#title').addEventListener('click', (e) => {
//     taskList.closeFrame();
//     coveyQuad.closeFrame();
//     timer.closeFrame();
//     pomodoro.closeFrame();
//     musicStreams.closeFrame();
//     musicPlayer.closeFrame();
//     folders.closeFrame();
//     readingLinks.closeFrame();
// });

  





  
  
  