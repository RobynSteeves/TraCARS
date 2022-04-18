let dataArray = [];

function submit(){
  console.log("button clicked");

  let nameInput = document.getElementById("name").value;
  let dateInput = document.getElementById("date").value;
  let timeStartInput = document.getElementById("timeStart").value;
  let timeEndInput = document.getElementById("timeEnd").value;
  let notesInput = document.getElementById("notes").value;
  
let obj = {}
  obj.name = nameInput;
  obj.date = dateInput;
  obj.timeStart = timeStartInput;
  obj.timeEnd = timeEndInput;
  obj.notes = notesInput;
  
  dataArray.push(obj);
  console.log(dataArray);
  
}

