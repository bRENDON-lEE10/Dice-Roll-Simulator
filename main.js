// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // LOOP
  for (i = 1; i < 6; i++) {
    let i = document.createElement("p");
    i.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(i);
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";

  iRollDice = prompt("how many times do you want to roll the dice?");

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  for (i = 1; i <= iRollDice; i++) {
    let iRollDice = document.createElement("p");
    iRollDice.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(iRollDice);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  rollDie = Math.floor(Math.random() * 6) + 1;

  let die1 = 0;
  let die2 = 0;
  let attempts = 0;

  while (die1 === 1 && die2 === 1) {
    die1 = rollDie();
    die2 = rollDie();
    attempts += 1;
    console.log(`Rolled: ${dice1} ${dice2}`);
  }
  console.log(`It took you ${attempts} rolls to get snake eyes.`);
}
