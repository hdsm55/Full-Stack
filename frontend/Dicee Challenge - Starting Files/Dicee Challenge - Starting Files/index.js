var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imagePaths = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var imgElement = document.querySelector(".img1");

if (randomNumber1 >= 1 && randomNumber1 <= 6) {
  imgElement.setAttribute("src", imagePaths[randomNumber1 - 1]);
} else {
  console.log("Error");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgElement2 = document.querySelector(".img2");

if (randomNumber2 >= 1 && randomNumber2 <= 6) {
  imgElement2.setAttribute("src", imagePaths[randomNumber2 - 1]);
} else {
  console.log("Error");
}

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 wins!";
} else {
  winner.innerHTML = "Draw!";
}
