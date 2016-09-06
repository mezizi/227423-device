
var link = document.querySelector(".write-us");
var popup = document.querySelector(".model-content");
var close= document.querySelector(".btn-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage= localStorage.getItem("login");


link .addEventListener("click", function(event){
	event .preventDefault();
	popup .classList .add("model-content-show");
	if (storage){
		login.value = storage;
		password.focus();
	}
	else{
		login.focus()
	}

});


close .addEventListener("click", function(event){
	event .preventDefault();
	popup .classList .remove("model-content-show");
});

form .addEventListener("submit", function(event){
	if (!login.value || !password.value){
		event .preventDefault();
		console.log("текст ввести");
	}
	else {localStorage.setItems("login", login.value);}
});
