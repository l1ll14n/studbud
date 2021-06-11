// get all of the main buttons
// for each, ad event listener
// on click, hide all other frames and show clicked button frame

document.querySelectorAll(".mainbutton").forEach(function(button){
    button.addEventListener('click', function(event){
        //Hide welcome text
      document.getElementById('welcomeText').classList.add('hidden');
      //select all frame containers and remove visible from all - to double check none are selected before going on to select proper one
      document.querySelectorAll('.frame-container').forEach(function(element){
        element.classList.remove('visible')
      })
      //activate the button that is clicked
      button.classList.toggle('active');
      //get id of clicked button
      let buttonId = button.getAttribute('id');

      let containerId = "#"+buttonId+"AllFrame";
      let frameContainer = document.querySelector(containerId);
      frameContainer.classList.add('visible');
    })
  })