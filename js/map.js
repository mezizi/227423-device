var linkMap = document.querySelector("#yandex-map");
var popupMap = document.querySelector(".model-content-map");
var closeMap = document.querySelector(".btn-map");

linkMap .addEventListener("click", function(event){
	event .preventDefault();
	popupMap .classList .add("model-content-map-show");
	

});

map__close .addEventListener("click", function(event){
	event .preventDefault();
	closeMap .classList .remove("model-content-map-show");
});