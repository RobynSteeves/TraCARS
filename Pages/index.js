function submit(){
  console.log("button has been clicked!");
  
  let firstNameInput = document.getElementById("firstName");
  console.log(firstNameInput.value);

  let selectCarInput = document.getElementById("selectCar");
  console.log(selectCarInput.value);  
  
  let dateInput = document.getElementById("date");
  console.log(dateInput.value); 
    
  let startTimeInput = document.getElementById("startTime");
  console.log(startTimeInput.value); 
    
  let endTimeInput = document.getElementById("endTime");
  console.log(endTimeInput.value);

  let reasonCarInput = document.getElementById("reasonCar");
  console.log(reasonCarInput.value);  
    
  let commentsInput = document.getElementById("comments");
  console.log(commentsInput.value);  
}
