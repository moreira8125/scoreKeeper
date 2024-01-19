const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;
const tbody = document.querySelector("tbody");
let counter = 1;
let winner;
let gameScore;

function addRow() {
  const newRow = document.createElement("tr");
  const game = document.createElement("td");
  const winnerOfGame = document.createElement("td");
  const result = document.createElement("td");

  game.textContent = counter;
  winnerOfGame.textContent = winner;
  result.textContent = `${gameScore[0]} - ${gameScore[1]}`;
  newRow.appendChild(game);
  newRow.appendChild(winnerOfGame);
  newRow.appendChild(result);
  tbody.appendChild(newRow);
  counter++;
}

function updateScores(player, opponent) {
  player.score += 1;
  if (player.score === winningScore) {
    isGameOver = true;
    player.display.classList.add("has-text-success");
    opponent.display.classList.add("has-text-danger");
    player.button.disabled = true;
    opponent.button.disabled = true;
    winner = player.button.textContent.slice(3);
    gameScore = [player.score, opponent.score];
    addRow();
  }
  player.display.textContent = player.score;
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

// MADE BY ME

// Name changing

const changeP1btn = document.querySelector("#changeP1btn");
const changeP1name = document.querySelector("#changeP1Name");
const changeP2btn = document.querySelector("#changeP2btn");
const changeP2name = document.querySelector("#changeP2Name");
const delete1Btn = document.querySelector("#delete1Btn");
const delete2Btn = document.querySelector("#delete2Btn");

changeP1btn.addEventListener("click", function () {
  p1.button.textContent = `+1 ${changeP1name.value}`;
  changeP1name.value = "";
});

changeP2btn.addEventListener("click", function () {
  p2.button.textContent = `+1 ${changeP2name.value}`;
  changeP2name.value = "";
});

delete1Btn.addEventListener("click", delete1Name);
delete2Btn.addEventListener("click", delete2Name);

function delete1Name() {
  p1.button.textContent = "+1 Player One";
}

function delete2Name() {
  p2.button.textContent = "+2 Player One";
}
