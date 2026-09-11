let startButton = document.getElementById("start-button");
// displays the start button in the start button element
let gameScreen = document.getElementById("game-screen");
// displays the game screen in the game screen element
let mainMenu = document.getElementById("main-menu");
// displays the main menu in the main menu element
let menuButton = document.getElementById("menu-button");
// displays the menu button in the menu button element
let week = 1;
// initializes the week variable to 1
let money = 20;
// initializes the money variable to 20

let savings = 0;
// 📊 EVENTS
let spending = 0;
// 📊 EVENTS
let giving = 0;
// 📊 EVENTS
let investments = 0;
// 📊 EVENTS
let investmentReturns = [-0.05,0,0.05];
let currentEvent;
let happiness = 50;
let investmentMessage = document.getElementById("investment-message");
// initializes the investmentReturns array with three possible returns: -5%, 0%, and +5%
let investmentDisplay = document.getElementById("investments-display");
let saveButton = document.getElementById("save-button");
// displays the save button in the save button element
let spendButton = document.getElementById("spend-button");
// displays the save and spend buttons in the respective button elements
let giveButton = document.getElementById("give-button");
// displays the save, spend, and give buttons in the respective button elements
let investButton = document.getElementById("invest-button");
// displays the save, spend, give, and invest buttons in the respective button elements
let moneyDisplay = document.getElementById("money-display");
// displays the money amount in the money display element
let nextWeekButton = document.getElementById("next-week-button");
// displays the next week button in the next week button element
let incomeAmount = document.getElementById("income-amount");
// displays the income amount in the income amount element
let eventChoices = document.getElementById("event-choices");
// displays the event choices in the event choices element
let acceptEventButton = document.getElementById("accept-event");
// displays the accept event button in the accept event button element
let declineEventButton = document.getElementById("decline-event");
// displays the decline event button in the decline event button element
let happinessDisplay = document.getElementById("happiness-display");
// displays the happiness amount in the happiness display element
let happinessFill = document.getElementById("happiness-fill");
moneyDisplay.textContent = money;
// displays the money amount in the money display element

let savingsDisplay = document.getElementById("savings-display");
// displays the savings amount in the savings display element
let spendingDisplay = document.getElementById("spending-display");
// displays the spending amount in the spending display element
let givingDisplay = document.getElementById("giving-display");
// displays the giving amount in the giving display element
let investmentsDisplay = document.getElementById("investments-display");
// displays the investments amount in the investments display element
let finishButton = document.getElementById("finish-button");
// displays the finish button in the finish button element
let weekDisplay = document.getElementById("week-display");
// displays the week number in the week display element
let eventDisplay = document.getElementById("event-display");
// displays the event text in the event display element
let incomeMessage = document.getElementById("income-message");
// displays the income message in the income message element
let resetButton = document.getElementById("reset-button");
const backButton = document.getElementById("back-button");
// displays the back button in the back button element
backButton.style.display = "none";
// hides the back button by default

startButton.addEventListener("click", startGame);
// starts the game when the start button is clicked
menuButton.addEventListener("click", returnToMenu);
// returns to the main menu when the menu button is clicked
saveButton.addEventListener("click", saveMoney);
// saves money when the save button is clicked
spendButton.addEventListener("click", spendMoney);
// spends money when the spend button is clicked
giveButton.addEventListener("click", giveMoney);
// gives money when the give button is clicked
investButton.addEventListener("click", investMoney);
//  invests money when the invest button is clicked
resetButton.addEventListener("click", resetGame);
// resets the game when the reset button is clicked
finishButton.addEventListener("click", finishWeek);
// finishes the week when the finish button is clicked
nextWeekButton.addEventListener("click", nextWeek);
// goes to the next week when the next week button is clicked

function getInvestmentReturn() {
    // returns a random investment return from the investmentReturns array
    let randomIndex = Math.floor(Math.random() * investmentReturns.length);
    return investmentReturns[randomIndex];
}

backButton.addEventListener("click", function() {
    backButton.style.display = "none";
    // hides the back button when clicked
    nextWeekButton.style.display = "none";
    // hides the next week button when clicked
    finishButton.style.display = "inline-block";
    // shows the finish button when back button is clicked

    finishButton.disabled = false;
    // enables the finish button when back button is clicked

    saveButton.disabled = false;
    // enables the save button when back button is clicked
    spendButton.disabled = false;
    //  enables the spend button when back button is clicked
    giveButton.disabled = false;
    // enables the give button when back button is clicked
    investButton.disabled = false;
    // enables the invest button when back button is clicked
});

function pickRandomEvent() {
    // picks a random event from the events array and updates the event display and money amount accordingly
    let randomNumber = Math.floor(Math.random() * events.length);
    let randomEvent = events[randomNumber];

    currentEvent = randomEvent;

    eventDisplay.textContent = randomEvent.text;

    if(randomEvent.type === "choice") {
        eventChoices.style.display = "block";
    } else {
        eventChoices.style.display = "none";
    }
    if (randomEvent.type === "income") {
        money = money + randomEvent.amount;
        incomeMessage.textContent = `You received $${randomEvent.amount}!`;
    }

    if (randomEvent.type === "expense") {
        money = money - randomEvent.amount;
    }

    moneyDisplay.textContent = money;
    incomeAmount.textContent = `+$${randomEvent.amount}`;
}

acceptEventButton.addEventListener("click", function() {
    money = money - currentEvent.amount;
    happiness = happiness + currentEvent.happiness;
    moneyDisplay.textContent = money;
    eventChoices.style.display = "none";
    updateHappiness();
});

declineEventButton.addEventListener("click", function() {
    happiness = happiness - 10;
    eventChoices.style.display = "none";
    updateHappiness();
});

function updateHappiness() {
    happinessDisplay.textContent = happiness;
    happinessFill.style.width = happiness + "%";
}

function resetGame() {
    // resets the game variables and updates the display elements accordingly
    let restart = confirm("Are you sure you want to reset the game? This will erase all progress.");

    if (restart === false) {
        return;
    }
    week = 1;
    money = 20;
    savings = 0;
    spending = 0;
    giving = 0;
    investments = 0;

    weekDisplay.textContent = week;
    moneyDisplay.textContent = money;
    savingsDisplay.textContent = savings;
    spendingDisplay.textContent = spending;
    givingDisplay.textContent = giving;
    investmentsDisplay.textContent = investments;

    eventDisplay.textContent = "A random event will appear here each week after week 1.";
    incomeMessage.textContent = "💵 Income: +$20";

    nextWeekButton.style.display = "none";
    finishButton.style.display = "inline-block";
    backButton.style.display = "none";

    saveButton.disabled = false;
    spendButton.disabled = false;
    giveButton.disabled = false;
    investButton.disabled = false;
}

function nextWeek() {
    // increments the week variable by 1 and updates the week display element with the new week number
    week = week + 1;
    weekDisplay.textContent = week;

    let investmentReturn = getInvestmentReturn();
    let investmentChange = investments * investmentReturn;
    investments = Math.round(investments + investmentChange);
    investmentsDisplay.textContent = investments;

    if (investments > 0) {
        investmentMessage.textContent = "📈Investments went up 5%!";
    } else if (investments < 0) {
        investmentMessage.textContent = "📉Investments went down 5%!";
    } else {
        investmentMessage.textContent = "➖Investments stayed the same.";
    }

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
    // disables the finish button and enables the next week button when the finish button is clicked
    nextWeekButton.style.display = "inline-block";
    backButton.style.display = "inline-block";
    finishButton.style.display = "none";

    saveButton.disabled = true;
    spendButton.disabled = true;
    giveButton.disabled = true;
    investButton.disabled = true;
}

function saveMoney() {
    // adds $5 to savings and subtracts $5 from money if the player has enough money to save
    if (money >= 5) {
        money = money - 5;
        savings = savings + 5;
        moneyDisplay.textContent = money;
        savingsDisplay.textContent = savings;
    }
}

function spendMoney() {
    // subtracts $5 from money and adds $5 to spending if the player has enough money to spend
    if (money >= 5) {
        money = money - 5;
        spending = spending + 5;
        moneyDisplay.textContent = money;
        spendingDisplay.textContent = spending;
    }
}

function giveMoney() {
    // subtracts $5 from money and adds $5 to giving if the player has enough money to give
    if (money >= 5) {
        money = money - 5;
        giving = giving + 5;
        moneyDisplay.textContent = money;
        givingDisplay.textContent = giving;
    }
}

function investMoney() {
    // subtracts $5 from money and adds $5 to investments if the player has enough money to invest
    if (money >= 5) {
        money = money - 5;
        investments = investments + 5;
        moneyDisplay.textContent = money;
        investmentsDisplay.textContent = investments;
    }
}

function startGame() {
    // hides the main menu and shows the game screen when the start button is clicked
    mainMenu.style.display = "none";
    gameScreen.style.display = "block";
}

function returnToMenu() {
    // hides the game screen and shows the main menu when the menu button is clicked
    gameScreen.style.display = "none";
    mainMenu.style.display = "flex";
}