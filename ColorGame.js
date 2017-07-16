// MAIN BEGIN
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var titleH1 = document.querySelector("h1");

var colors = [];

reinitialize(onSquareClick);

document.getElementById("color").textContent = pickedColor.toUpperCase();

//MAIN END

function reinitialize(func){
	generateColors(6);
	pickedColor = colors[randomIndex(5)];
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if(func){
			squares[i].addEventListener("click", func);
		}
	}
}

function generateColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+red+", "+green+", "+blue+")";
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
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
}

function changeColors(color){
	titleH1.style.backgroundColor = pickedColor;
	squares.forEach(x => x.style.backgroundColor = color);
}