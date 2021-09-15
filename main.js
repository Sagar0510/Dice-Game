var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var imageName1 = "images/dice" + randomNumber1 + ".png";
var imageName2 = "images/dice" + randomNumber2 + ".png";

var newImage1 = document.querySelector(".img1");
var newImage2 = document.querySelector(".img2");

newImage1.setAttribute("src", imageName1);
newImage2.setAttribute("src", imageName2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "⛳ Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 won! ⛳";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
