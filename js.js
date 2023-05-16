
function init() {
    //create event handler for the button
    var addButton = document.getElementById("addButton");
     addButton.onclick = handleAddButton; 
      
}

function handleAddButton() {
    // grab the iput text
    var todoInputText = document.getElementById("todoInput");
    var item = todoInputText.value;

    // create "li" element and add the input
    var newItem = document.createElement("li");
    newItem.innerHTML = item;

    // pass the newItem to the container
    var lc = document.getElementById("list-container")
    lc.appendChild(newItem);   
    
    // reset the input form after clicking
    todoInputText.value ="";

    // grab li elements after created handle the event
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
       items[i].onclick = crossItem;
    }
          
}

function crossItem(eventObj) {
    // handle each li crossing it after clic
    var item = eventObj.target;
    item.setAttribute("class", "crossed");
}

//initializa functions
window.onload = init;

