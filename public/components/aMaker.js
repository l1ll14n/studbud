// Original code referenced from: https://stackoverflow.com/questions/41191424/extract-first-character-of-each-word-from-the-sentence-string

const wordForm = document.getElementById("acronymForm");
var acronymButton = document.getElementById("acronymSubmit");

acronymButton.addEventListener("click", function(event){
    event.preventDefault();
    var words = document.getElementById("wordInput").value;
    console.log(words);
    var matches = words.match(/\b(\w)/g);
    var acronym = matches.join('');
    console.log(acronym);
    acronymPrint(acronym.toUpperCase());
    wordForm.reset();
  })

function acronymPrint(txt) {
    document.getElementById("doneAcronym").innerHTML = txt;
}