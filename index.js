// Creating random number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1);

// Random image generator based upon random number generated
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
console.log(randomDiceImage);

// where JS changes the image for us
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
// using querySelectorAll because there's two "img" in the code and then from there you select the positioning you need

// Creating random number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// Random image generator based upon random number generated
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
console.log(randomDiceImage2);

// where JS changes the image for us
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


// Declaring the Winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
