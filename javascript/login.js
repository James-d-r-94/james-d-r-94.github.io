const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
//const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    //const username = loginForm.username.value;
    //const password = loginForm.password.value;
	const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;
	
	// const username = loginForm.uname.value;
    // const password = loginForm.psw.value;
	
	

    if (username === "admin" && password === "admin") {
        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
		window.location.href = "RequestForm.html";
        //location.reload();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        //loginErrorMsg.style.opacity = 1;
		alert("Please input correct username and password");
		document.getElementById("uname").focus();
    }
})

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function forgotPassword()
{
	alert("User: admin, Password: admin");
}