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