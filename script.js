let startButton = document.getElementById("start-button");
let gameScreen = document.getElementById("game-screen");
let mainMenu = document.getElementById("main-menu");
let menuButton = document.getElementById("menu-button");
let week = 1;
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
let nextWeekButton = document.getElementById("next-week-button");
moneyDisplay.textContent = money;

let savingsDisplay = document.getElementById("savings-display");
let spendingDisplay = document.getElementById("spending-display");
let givingDisplay = document.getElementById("giving-display");
let investmentsDisplay = document.getElementById("investments-display");
let finishButton = document.getElementById("finish-button");
let weekDisplay = document.getElementById("week-display");
let eventDisplay = document.getElementById("event-display");
let incomeMessage = document.getElementById("income-message");

startButton.addEventListener("click", startGame);
menuButton.addEventListener("click", returnToMenu);
saveButton.addEventListener("click", saveMoney);
spendButton.addEventListener("click", spendMoney);
giveButton.addEventListener("click", giveMoney);
investButton.addEventListener("click", investMoney);
finishButton.addEventListener("click", finishWeek);
nextWeekButton.addEventListener("click", nextWeek);

function pickRandomEvent() {
    let randomNumber = Math.floor(Math.random() * events.length);
    let randomEvent = events[randomNumber];

    eventDisplay.textContent = randomEvent.text;

    if (randomEvent.type === "income") {
        money = money + randomEvent.amount;
        incomeMessage.textContent = `You received $${randomEvent.amount}!`;
    }

    if (randomEvent.type === "expense") {
        money = money - randomEvent.amount;
    }

    moneyDisplay.textContent = money;
}

function nextWeek() {
    week = week + 1;
    weekDisplay.textContent = week;

    money = money + 20;
    moneyDisplay.textContent = money;

    incomeMessage.textContent = `💵 Income: +$20`;

    saveButton.disabled = false;
    spendButton.disabled = false;
    giveButton.disabled = false;
    investButton.disabled = false;

    nextWeekButton.style.display = "none";
    finishButton.style.display = "inline-block";

    if (week > 1) {
        pickRandomEvent();
    }
}

function finishWeek() {
    nextWeekButton.style.display = "inline-block";
    finishButton.style.display = "none";

    saveButton.disabled = true;
    spendButton.disabled = true;
    giveButton.disabled = true;
    investButton.disabled = true;
}
function saveMoney() {
    if (money >= 5) {
        money = money - 5;
        savings = savings + 5;
        moneyDisplay.textContent = money;
        savingsDisplay.textContent = savings;
    }
}

function spendMoney() {
    if (money >= 5) {
        money = money - 5;
        spending = spending + 5;
        moneyDisplay.textContent = money;
        spendingDisplay.textContent = spending;
    }
}

function giveMoney() {
    if (money >= 5) {
        money = money - 5;
        giving = giving + 5;
        moneyDisplay.textContent = money;
        givingDisplay.textContent = giving;
    }
}

function investMoney() {
    if (money >= 5) {
        money = money - 5;
        investments = investments + 5;
        moneyDisplay.textContent = money;
        investmentsDisplay.textContent = investments;
    }
}

function startGame() {
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
}

function returnToMenu() {
    gameScreen.style.display = "none";
    mainMenu.style.display = "flex";
}