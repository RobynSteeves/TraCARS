let startTime = document.getElementById("product1");
  alert(product1.value);
let endTime = document.getElementById("product2");
  alert(endTime.value);
let date = document.getElementById("product3");
  alert(date.value);
  
let inputEls = document.querySelectorAll(".product-row > input");
  console.log(inputEls.length);
  
alert(inputEls.length); // number of elements

// iterate/loop through the input elements

for (let i = 0; i < inputEls.length;  i++) {
console.log(inputEls[i].value)
}       //end of for loop
}