var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}

dice1.setAttribute("src", "images/dice"+randomNumber1+".png");
dice2.setAttribute("src", "images/dice"+randomNumber2+".png");
