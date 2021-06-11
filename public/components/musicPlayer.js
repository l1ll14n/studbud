// if button clicked, create iframe in other frame
//if iframe already exists, close it and open the selected one
// -> before doing anything in event listener, close/delete all iframes

document.querySelectorAll(".streamSelect").forEach(function(button){
    button.addEventListener('click', function(event){
      //select all embedded frames and remove visible from all - to double check none are selected before going on to select proper one
      document.querySelectorAll('.stream-container').forEach(function(element){
        element.classList.remove('visible');
        //to stop any videos that were left playing so they don't play in the background
        stopVideo(element);
        
      })
      console.log("hello");
      //activate the button that is clicked
      button.classList.toggle('active');
      //get id of clicked button
      let buttonId = button.getAttribute('id');
      console.log(buttonId + " is active");
      
      let containerId = "#"+buttonId+"Show";
      console.log(containerId + " is showing");
      let videoContainer = document.querySelector(containerId);
      console.log(videoContainer + " is active");
      videoContainer.classList.add('visible');
    })
  })

//if another stream is selected while one is playing, this function stops it playing so that you don't get layered music
// Original code referenced from: https://gist.github.com/cferdinandi/9044694
function stopVideo(element) {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'video' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};
