var loginButton = document.getElementsByClassName('login-button');
var signupButton = document.getElementsByClassName('signup-button');

loginButton[0].addEventListener("click", function(event) {
		event.preventDefault();
       alert("LoginButton Clicked!!");
     })
	 
signupButton[0].addEventListener("click", function(event) {
		event.preventDefault();
       alert("Signup Button Clicked!!");
     })	 
