let startButton = document.getElementById("start-button");
let gameScreen = document.getElementById("game-screen");
let mainMenu = document.getElementById("main-menu");

startButton.addEventListener("click", startGame);

function startGame() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
}