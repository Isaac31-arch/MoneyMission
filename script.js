let startButton = document.getElementById("start-button");
let gameScreen = document.getElementById("game-screen");
let mainMenu = document.getElementById("main-menu");
let menuButton = document.getElementById("menu-button");
let money = 20;

let savings = 0;
let spending = 0;
let giving = 0;
let investments = 0;
let saveButton = document.getElementById("save-button");
let spendButton = document.getElementById("spend-button");
let giveButton = document.getElementById("give-button");
let investButton = document.getElementById("invest-button");
let moneyDisplay = document.getElementById("money-display");
moneyDisplay.textContent = money;

startButton.addEventListener("click", startGame);
menuButton.addEventListener("click", returnToMenu);
saveButton.addEventListener("click", saveMoney);
spendButton.addEventListener("click", spendMoney);
giveButton.addEventListener("click", giveMoney);
investButton.addEventListener("click", investMoney);

function saveMoney() {
    money = money -5;
    savings = savings + 5;
    moneyDisplay.textContent = money;
}

function spendMoney() {
    money = money - 5;
    spending = spending + 5;
    moneyDisplay.textContent = money;
}

function giveMoney() {
    money = money - 5;
    giving = giving + 5;
    moneyDisplay.textContent = money;
}

function investMoney() {
    money = money - 5;
    investments = investments + 5;
    moneyDisplay.textContent = money;
}

function startGame() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
}

function returnToMenu() {
    gameScreen.style.display = "none";
    mainMenu.style.display = "flex";
}