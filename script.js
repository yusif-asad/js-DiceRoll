let imgDice = document.getElementById(`img-dice`);
let rollDice = document.getElementById(`rollDice`);
let rolldices = document.getElementById(`rolldices`);

let num = 0;

rollDice.addEventListener(`click`, function runRollDice() {
  num+=1;
  let images = [
    `images/1.jpg`,
    `images/2.jpg`,
    `images/3.jpg`,
    `images/4.jpg`,
    `images/5.jpg`,
    `images/6.jpg`,
  ];

  function rolls() {
    return Math.floor(Math.random() * 6);
  }

  imgDice.src = images[rolls()];
  
  const newDiceItem = document.createElement(`li`);
  const newDiceimg = document.createElement(`img`);
  newDiceItem.textContent= `Roll ${num}`;
  rolldices.appendChild(newDiceItem);
  newDiceimg.src = images[rolls()];
  newDiceItem.appendChild(newDiceimg);
});
