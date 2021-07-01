//https://stackoverflow.com/questions/45888863/how-can-we-save-html-form-data-into-xml-format-using-javascript-or-jquery
function validate(form) 
{
	var alphaExp = /^[a-zA-Z]+$/;
	
	var name = document.forms["RequestForm"]["fullname"];
	//var teamname = document.forms["RequestForm"]["teamname"];
	//var toolname = document.forms["RequestForm"]["toolname"];
	//var currentdescription = document.forms["RequestForm"]["currentdescription"];
	var usercount = document.forms["RequestForm"]["usercount"];
	//var features = document.forms["RequestForm"]["features"];
	//var requiredmaintenance = document.forms["RequestForm"]["requiredmaintenance"];
	//var stakeholders = document.forms["RequestForm"]["stakeholders"];
	//var discussions = document.forms["RequestForm"]["discussions"];
	//var managementrequirements = document.forms["RequestForm"]["managementrequirements"];
	//var files = document.forms["RequestForm"]["files"];
	//var  = document.forms["RequestForm"][""];

	//Checks name for empty 
	if (name.value == "") {
		window.alert("Please enter your name.");
		name.focus();
		return false;
	}
	//Checks name for non-letters
	if(!name.value.match(alphaExp))
	{
		alert("Please enter only alphabets");
		name.focus();
		return false;
	}
	//Checks if number of users has been selected
	if (usercount.selectedIndex < 1) {
		alert("Please select the number of users.");
		usercount.focus();
		return false;
	}
	
	window.alert("All inputs are valid.");
	return true;
}

// function allLetters(inputtxt)
// {
	// var letters = /^[A-Za-z]+$/;
	// if(inputtxt.value.match(letters))
	// {
		// alert('Your name have accepted : you can try another');
		// return true;
	// }
	// else
	// {
		// alert('Please input alphabet characters only');
		// return false;
	// }
// }


function downloadData(contentType,data,filename)
{
	 
   var link=document.createElement("A");
   link.setAttribute("href",encodeURI("data:"+contentType+","+data));
   link.setAttribute("style","display:none");
   link.setAttribute("download",filename);
   document.body.appendChild(link); //needed for firefox
   console.log(link.outerHTML);
   link.click();
   setTimeout(function(){
   	document.body.removeChild(link);
   },1000);
}

function formToXml(form){
    var xmldata=['<?xml version="1.0"?>'];
	  xmldata.push("<form>");
    var inputs=form.elements;
    for(var i=0;i<inputs.length;i++){
    	var el=document.createElement("ELEMENT");
      if (inputs[i].name != "feature" && inputs[i].name != ""){
      	el.setAttribute("name",inputs[i].name);
        el.setAttribute("value",inputs[i].value);
        xmldata.push(el.outerHTML);
      }
      
    }
    xmldata.push("</form>");
    return xmldata.join("\n");
}


function download(frm)
{
	if(validate(frm))
	{
		var data=formToXml(frm);
		console.log(data);
		downloadData("text/xml",data,"export.xml");
	}
}

