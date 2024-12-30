
var randNumber1 = Math.floor(Math.random() * 6) + 1; 

var randDiceImg = "dice" + randNumber1 + ".png";

var randImgSrc = "images/" + randDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randImgSrc);


var randNumber2 = Math.floor(Math.random() * 6) + 1;

var randImgSrc2 = "images/dice" + randNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);



if (randNumber1 > randNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randNumber2 > randNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
