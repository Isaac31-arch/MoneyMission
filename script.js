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
let events = [
    "🎂 Birthday gift! You received $10.",
    "💵 Extra allowance! You received $5.",
    "🧹 You did extra chores and earned $10.",
    "🎮 You sold an old game for $8.",
    "🪙 You found $3 in your room.",
    "🏆 You won a school contest and earned $15.",

    "🚲 Your bike needs a repair. Pay $5.",
    "🎧 Your headphones broke. Pay $10.",
    "📚 You need school supplies. Pay $5.",
    "🍕 You went out for food. Pay $5.",
    "🎟️ You bought a movie ticket. Pay $10.",
    "🚌 You need transportation money. Pay $5.",

    "📈 Your investment increased by $5.",
    "📈 Your investment increased by $10.",
    "📉 Your investment lost $5.",
    "💰 Your investment paid you a $3 bonus.",

    "🎁 A friend has a fundraiser. Do you want to give $5?",
    "🐶 An animal shelter is collecting donations. Give $5?",
    "🌳 Your school is raising money for a community garden. Give $5?",

    "👟 New shoes are on sale for $10. Buy them?",
    "🎮 A new game costs $15. Buy it?",
    "🍦 Your friends are getting ice cream for $5. Join them?",
    "📱 A phone accessory you want costs $10. Buy it?",

    "🎉 No unexpected expenses this week!",
    "🎟️ You received a free movie ticket!",
    "🍪 Someone gave you a free snack.",
    "🏦 Your savings earned a $2 bonus.",
    "💸 You received $5 cashback."
];
moneyDisplay.textContent = money;

let savingsDisplay = document.getElementById("savings-display");
let spendingDisplay = document.getElementById("spending-display");
let givingDisplay = document.getElementById("giving-display");
let investmentsDisplay = document.getElementById("investments-display");
let finishButton = document.getElementById("finish-button");
let weekDisplay = document.getElementById("week-display");

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

    console.log(randomEvent);
}

pickRandomEvent();

function nextWeek() {
    week = week + 1;
    weekDisplay.textContent = week;

    saveButton.disabled = false;
    spendButton.disabled = false;
    giveButton.disabled = false;
    investButton.disabled = false;

    nextWeekButton.style.display = "none";
    finishButton.style.display = "inline-block";
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