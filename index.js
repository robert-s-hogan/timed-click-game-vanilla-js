const intro = document.getElementById("#intro");
const game = document.getElementById("#game");
const results = document.getElementById("#results");

function startGame() {
  intro.style.display = "none";
  game.style.display = "block";
  results.style.display = "none";
}

function backToIntro() {
  intro.style.display = "block";
  game.style.display = "none";
  results.style.display = "none";
}

function showResults() {
  intro.style.display = "none";
  game.style.display = "none";
  results.style.display = "block";
}

const grid = document.getElementById("#grid");
