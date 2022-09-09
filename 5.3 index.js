var button = document.getElementById("enter");
var input = document.getElementById('userinput'); 
var ul = document.querySelector('ul')  

button.addEventListener("click" , function click() { 
   var li = document.createElement("li"); 
   li.appendChild(document.createTextNode(input.Value)); 
   ul.appendChild(li);
   input.value = "";
}) 


button.addEventListener('click' , function() {
   
})