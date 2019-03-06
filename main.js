
// *counter* counts the number of notes added until now , and *lstOfNotes*
// is a list of json objects of the notes which sould be saved
// in Data Base. I have set a limit of 100 notes for now since
// there is no DB to work with here.
var counter = 1;
var lstOfNotes = new Array(100);



// 1. add notes button functionality
var modal = document.getElementById("simpleModal");
var note = document.getElementById("add-note");
var modalBtn = document.getElementById("modalbtn");
var closebtn = document.getElementsByClassName("closebtn")[0];
modalBtn.addEventListener('click', addNote);
function addNote() {
  note.style.visibility = "visible";
  savebtn.style.visibility = "visible";
}


// 2.save button functionality
// this is pretty long but I really did not have much time to work on it , sorry
var savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", saveNote);
function saveNote() {
  var noteToSave;
  var d1 = document.createElement("div");
  var att = document.createAttribute("class");
  att.value = "column";
  d1.setAttributeNode(att);

  att = document.createAttribute("id");
 att.value = "col" + counter.toString();
 d1.setAttributeNode(att);

  var d2 = document.createElement("div");
   att = document.createAttribute("class");
  att.value = "card";
  d2.setAttributeNode(att);
  att = document.createAttribute("onclick");
  att.value = "show(counter.toString())";
  d2.setAttributeNode(att);
  d1.appendChild(d2);
  var p = document.createElement("P");
  d2.appendChild(p);
  document.body.appendChild(d1);
  p.innerHTML = document.getElementById('title').value;
  document.getElementById("content").innerHTML = document.getElementById("mainNote").value;

  var some_div = document.getElementsByClassName("modal-content")[0];
  at = document.createAttribute("id");
  at.value = counter.toString();
  some_div.setAttributeNode(at);

  noteToSave = {
    note_id : counter.toString(),
    title: document.getElementById('title').value,
    text:document.getElementById("mainNote").value,
 user : document.getElementById("name").value,
dateCreated: Date(),
DateLastModifeid: Date()
};
// here we save the note into Data Base
lstOfNotes[counter-1] = noteToSave;
d1.style.visibility = "visible";
counter = counter +1;

}

//  funstion to show the details of the selected note
function show(s) {
modal.style.visibility = "visible";
setUp();
}


//3. close button functionality
closebtn.addEventListener('click', closeNote);

function closeNote(){
modal.style.visibility = "hidden";
}



// 4. delete button inside the modal that represents a specific selectd note
var delbtn = document.getElementById("delbtn");
delbtn.addEventListener("click", deleteNote);
function deleteNote() {
  var a_div = document.getElementsByClassName("modal-content")[0];
  var todel = a_div.getAttribute("id");
  todel = document.getElementById("col" + todel);
  todel.parentNode.removeChild(todel);
  modal.style.visibility = "hidden";
  return false;
}




//5 . function to get the id of the current node
function getCurrentNoteId() {
  var a_div = document.getElementsByClassName("modal-content")[0];
  var cur = a_div.getAttribute("id");
return "col" + cur;
}





// 6. function to confirm the change of color of a note card

  function setUp() {
  var cur_note_id = getCurrentNoteId();
  for (let i=1 ; i< 5; i++){
    var colorbtn = document.getElementById("colorbtn"+ i.toString());
    var colour = colorbtn.getAttribute('background-color');
    colorbtn.addEventListener("click", colorbtn.addEventListener("click",
    function showAlert() {
      var cb = "colorbtn"+ i.toString();
      if (confirm("Would you like to change the color of your note ?")){
        var btn = document.getElementById(cb)
       var compStyles = window.getComputedStyle(btn);
       var color = compStyles.getPropertyValue('background-color') ;
       var note_id = getCurrentNoteId();
       var node = document.getElementById(note_id);
       var a_card = node.getElementsByClassName("card")[0];
       a_card.style.backgroundColor= color;
      console.log(color);
      } else {
      }
  }));
}
}
