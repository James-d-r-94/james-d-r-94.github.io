var userInput = document.getElementById("userChoice").value;
var textNodeValue = userInput;

// remove a list element when the user clicks on remove item
function deleteElement(clicked_id) {
  //save list element
  var clickedButton = document.getElementById(clicked_id);
  console.log(clickedButton);
  var parentNodeLi = clickedButton.parentElement;
  var listElement = parentNodeLi.parentElement;
  listElement.removeChild(parentNodeLi);
}

// adds a new list item
function addListItem(textNodeValue) 
{
	var userInput = document.getElementById("userChoice").value;
	var textNodeValue = userInput;
	//add list item, button and image to button
	var newElem = document.createElement("li");
	var newButton = document.createElement("button");
	//var newImage = document.createElement("img");

	//add text nodes
	var newNode = document.createTextNode(textNodeValue);
	var newNodeButton = document.createTextNode("");
	//newImage.src = "images/deleteIcon.jpg"; //add src for image 
	//newImage.height = 32;
	newButton.textContent = "x";

	//add id to the button
	var nodeList = document.getElementsByTagName("li");
	var idIncrementor = nodeList.length + 1;
	console.log(idIncrementor);


	newButton.setAttribute("id", "button".concat(idIncrementor));
	console.log(newButton.getAttribute("id"));

	//add anonymous function to the evenListerner to call the deleteElement function
	//use it for parameter to the onclick function
	newButton.addEventListener('click', function() {
	deleteElement(newButton.getAttribute("id"))
	});

  // add the image for the button
  //newButton.appendChild(newImage);

  //append text node and button to the new list element
  newElem.appendChild(newNode);
  newElem.appendChild(newButton);

  //get the orderedList and append the new list
  var unorderedList = document.getElementById("list");
  unorderedList.appendChild(newElem);
  //document.getElementById("features[]").innerHTML = Array.from(unorderedList);
  
}