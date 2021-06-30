function dynamicShowHide()
{
	if(document.getElementById("stakeholders").value !== "")
	{
		document.getElementById("divDiscussions").style.display = "block"
	}
	else
	{
		document.getElementById("divDiscussions").style.display = "none"
	}
}


/* var textarea = document.getElementById("stakeholders");
textarea.addEventListener('input', dynamicShowHide);
function dynamicShowHide()
{
	var text = this.value();
	
	if(text !== "")
	{
		document.getElementById("divDiscussions").style.display = "inline-block"
	}
	else
	{
		document.getElementById("divDiscussions").style.display = "none"
	}
}


textarea.addEventListener('input', hideOnEmpty);
function hideOnEmpty() {
    var text = this.value;
    if (text !== ''){
        alert("works");
        document.getElementById("sendicon1").style.display = "none";         
        document.getElementById("sendicon2").style.display = "inline";         
    }
    else{
        alert("not working");
        document.getElementById("sendicon2").style.display = "none";         
        document.getElementById("sendicon1").style.display = "inline";
    }
} */