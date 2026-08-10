let startButton = document.getElementById("start-button");
let gameScreen = document.getElementById("game-screen");
let mainMenu = document.getElementById("main-menu");
let menuButton = document.getElementById("menu-button");
let money = 20;
let moneyDisplay = document.getElementById("money-display");
moneyDisplay.textContent = money;

startButton.addEventListener("click", startGame);
menuButton.addEventListener("click", returnToMenu);

function startGame() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
}

function returnToMenu() {
    gameScreen.style.display = "none";
    mainMenu.style.display = "flex";
}