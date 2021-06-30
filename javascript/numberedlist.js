var userInput = document.getElementById("feature").value;
var textNodeValue = userInput;

// remove a list element when the user clicks on remove item
function deleteElement(clicked_id) {
  //save list element
  var clickedButton = document.getElementById(clicked_id);
  console.log(clickedButton);
  var parentNodeLi = clickedButton.parentElement;
  var listElement = parentNodeLi.parentElement;
  listElement.removeChild(parentNodeLi);
  updateHiddenInput();
}

// adds a new list item
function addListItem(textNodeValue) 
{
	var userInput = document.getElementById("feature").value;
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
  var unorderedList = document.getElementById("featureslist");
  unorderedList.appendChild(newElem);
  //const array = Array.from(unorderedList);
  document.getElementById("feature").value = "";
  updateHiddenInput();
  //document.getElementById("target-id").innerHTML += "test";
  //const myTarget = document.getElementById("target-id")
  /*var myTarget = document.getElementById("target-id");
  //var newList = document.getElementById("featureslist");
  //myTarget.innerHTML += unorderedList;
  myTarget.innerHTML = "";
  for(let i = 0; i < unorderedList.children.length; i++)
  {
	  myTarget.innerHTML += (i+1)+ ". ";
	  //myTarget.appendChild(unorderedList.child[i].innerHTML);
	  myTarget.innerHTML += unorderedList.children[i].firstChild.nodeValue;
	  myTarget.innerHTML += "<br>";
  }*/

  //for(let i = 0; i < unorderedList.length; i++)
  //{
//	  document.getElementById("target-id").innerHTML += unorderedList[i].nodeValue;
  //}
  //document.getElementById('target-id').innerHTML = 'html data';

}

//Writes the html object into a hidden textarea as an input
function updateHiddenInput()
{
	var myList = document.getElementById("featureslist");
	var myTarget = document.getElementById("features");
	var listString = ""
	myTarget.innerHTML = "";
	for(let i = 0; i < myList.children.length; i++)
  {
	  listString += (i+1)+ ". ";
	  listString += myList.children[i].firstChild.nodeValue;
	  listString += "\n";
	  myTarget.value = listString;
	  
  }
	
}
