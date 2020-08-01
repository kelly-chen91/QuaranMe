/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");


/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}

/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {            //find out which element triggered a specified event
    clicked.target.classList.toggle("all-done");   //apply the CSS rule set outlined in .all-done if condition is met
  }
}

// Creates close button for ToDo list
var myNodelist =
    document.getElementsByClassName("action-li");
var i;
for(i =0; i < myNodelist.length; i++){
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on close button to hide list item
var close = document.getElementsByClassName("close");
var i;
for(i =0;i < close.length; i++){
  close [i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Create new list item when clicking add button
function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ''){
    alert("You must write something!");
  } else{
    document.getElementById("my-list").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className ="close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for(i=0; i<close.length; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display ="none";
    }
  }
  }





