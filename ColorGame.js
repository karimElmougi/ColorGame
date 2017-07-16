// MAIN BEGIN
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var jumbotron = document.querySelector(".jumbotron");
var colorTextDisplay = document.getElementById("color");
var newGameButton = document.querySelector("#NewGameButton");
var easyButton = document.querySelector("#EasyButton"); 
var hardButton = document.querySelector("#HardButton");
var numberOfSquares = 6;

var colors = [];

reinitialize(onSquareClick);

newGameButton.addEventListener("click", reinitialize);

easyButton.addEventListener("click", function(){
	if(!easyButton.classList.contains("selected")){
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		numberOfSquares = 3;
		reinitialize();
	}
});

hardButton.addEventListener("click", function(){
	if(!hardButton.classList.contains("selected")){
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		numberOfSquares = 6;
		reinitialize();
	}
});

//MAIN END

function reinitialize(func){
	colors = [];
	generateColors(numberOfSquares);
	pickedColor = colors[randomIndex(numberOfSquares-1)];
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if(func){
			squares[i].addEventListener("click", func);
		}
		squares[i].style.display = "block";
	}
	for(var i = colors.length; i<6; i++){
		squares[i].style.display = "none";
	}
	newGameButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	colorTextDisplay.textContent = pickedColor;
	jumbotron.style.backgroundColor = "steelblue";
}

function generateColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateColors(num){
	for (var i = 0; i < num; i++) {
		colors.push(generateColor());
	}
}

function randomIndex(max){
	return Math.floor(Math.random() * (max+1));
}

function onSquareClick(){
	if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			newGameButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
}

function changeColors(color){
	jumbotron.style.backgroundColor = pickedColor;
	squares.forEach(x => x.style.backgroundColor = color);
}