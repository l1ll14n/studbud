// if button clicked, create iframe in other frame
//if iframe already exists, close it and open the selected one
// -> before doing anything in event listener, close/delete all iframes

// document.querySelectorAll(".streamSelect").forEach(function(button){
//     button.addEventListener('click', function(event){
//         //Hide welcome text
//     //   document.getElementById('welcomeText').classList.add('hidden');
//       //select all embedded frames and remove visible from all - to double check none are selected before going on to select proper one
//       document.querySelectorAll('.stream-container').forEach(function(element){
//         element.classList.remove('visible')
//       })
//       //activate the button that is clicked
//       button.classList.toggle('active');
//       //get id of clicked button
//       let buttonId = button.getAttribute('id');
      
//       let containerId = "#"+buttonId+"Show";
//       console.log(containerId);
//       let frameContainer = document.querySelector(containerId);
//       console.log(frameContainer);
//       frameContainer.classList.add('visible');
//     })
//   })

// var musicPlayer = document.getElementById("ptShowFrame");

// //buttons for button selector
// var stream1Button = document.getElementById("stream1");

// stream1Button.addEventListener("click", function(event){
//     let mix1 = document.createElement("container");
//     mix1.className = "mixFrame"
//     mix1.id = "mix1Frame"
//     mix1.innerHTML = <iframe width="560" height="315" src="https://www.youtube.com/embed/KJ5UazhKXC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;

//     musicPlayer.appendChild(mix1);
// })
// var stream2Button = document.getElementById("stream2");
// var stream3Button = document.getElementById("stream3");
// var stream4Button = document.getElementById("stream4");
// var stream5Button = document.getElementById("stream5");
// var stream6Button = document.getElementById("stream6");
// var stream7Button = document.getElementById("stream7");
// var stream8Button = document.getElementById("stream8");
// var stream9Button = document.getElementById("stream9");
// var stream10Button = document.getElementById("stream10");
// var stream11Button = document.getElementById("stream11");
// var stream12Button = document.getElementById("stream12");



