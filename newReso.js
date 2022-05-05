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

let startEndTimeUserA = document.getElementById("timeStartInput");
let startEndTimeUserB = document.getElementById("timeStartInput")

/*

//check if the the numbers are common
let startEndTimeUserA = [6,7,8,9,10];
let startEndTimeUserB = [7,8,9];
let commonTime = [];
document.getElementById("checkbutton").addEventListener("click", function(){
  //find for common numbers between the 2 arrays 
  //bit long way to do this is to use a nested for loop with an if conditional statement inside the innermost for loop
  console.log(startEndTimeUserB)
  if(startEndTimeUserA.length > startEndTimeUserB.length){
for(let i = 0; i < startEndTimeUserA.length; i++){
       let num1 = startEndTimeUserA[i];
       for(let k =  0; k < startEndTimeUserB.length; k++){
         let num2 =  startEndTimeUserB[k]
           if(num1 === num2){
             console.log(`${num1} and ${num2} are the common elements`);
             commonTime.push(num1)
           }//end of inner if         
       } //end of inner for 
     }  //end of outer for 
  }//end of outer if
console.log(commonTime)
})

/*
if/else
for loop
built in array() method


*/