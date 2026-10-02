// let events = [
//     // 💰 INCOME EVENTS
//     {
//         text: "🎂 It's your birthday! You received $10.",
//         type: "income",
//         amount: 10
//     },
//     {
//         text: "💵 You received an extra $5 in allowance.",
//         type: "income",
//         amount: 5
//     },
//     {
//         text: "🍋 You helped run a lemonade stand and earned $10.",
//         type: "income",
//         amount: 10
//     },
//     {
//         text: "🚗 You helped wash a car and earned $5.",
//         type: "income",
//         amount: 5
//     },
//     {
//         text: "📚 You sold some old books and earned $5.",
//         type: "income",
//         amount: 5
//     },
//     {
//         text: "🏆 You won a small contest and received $15.",
//         type: "income",
//         amount: 15
//     },
//     {
//         text: "🎁 A relative gave you $10 as a gift.",
//         type: "income",
//         amount: 10
//     },

//     // 💸 EXPENSE EVENTS
//     {
//         text: "🍕 Your friends are getting pizza. It costs $10.",
//         type: "choice",
//         amount: 10,
//         happiness: 25,
//     },
//     {
//     text: "🎬 You want to see a movie. A ticket costs $15.",
//         type: "choice",
//         amount: 15,
//         happiness: 25,
//     },
//     {
//         text: "👕 You found a shirt you really like for $25.",
//         type: "choice",
//         amount: 25,
//         happiness: 25
//     },
//     {
//         text: "🎮 A new game you want costs $30.",
//         type: "choice",
//         amount: 30,
//         happiness: 25
//     },
//     {
//         text: "🍦 You want to get ice cream with your friends for $5.",
//         type: "choice",
//         amount: 5,
//         happiness: 25
//     },
//     {
//         text: "🚲 Your bike needs a repair. It costs $25.",
//         type: "expense",
//         amount: 25,
//         minweek: 4,
//         weight: 3
//     },
//     {
//         text: "🎧 Your headphones broke. Replacing them costs $10.",
//         type: "expense",
//         amount: 10,
//         weight: 1
//     },
//     {
//         text: "📚 You need new school supplies. They cost $5.",
//         type: "expense",
//         amount: 5,
//         weight: 1
//     },
//     {
//         text: "🚌 You need to pay $5 for transportation.",
//         type: "expense",
//         amount: 5,
//         weight: 1
//     },
//     {
//         text: "🍕 You bought food while you were out. It costs $10.",
//         type: "expense",
//         amount: 10,
//         weight: 1
//     },
//     {
//         text: "🔌 Your charging cable broke. A replacement costs $20.",
//         type: "expense",
//         amount: 20,
//         weight: 2
//     },
//     {
//         text: "🎒 Your backpack ripped. A replacement costs $30.",
//         type: "expense",
//         amount: 30,
//         minWeek: 4,
//         weight: 3
//     },
//     {
//         text: "💻 You need a small computer accessory for school. Pay $30.",
//         type: "expense",
//         amount: 30,
//         minweek: 4,
//         weight: 3
//     },
//     {
//         text: "📱 Your phone screen cracks. Repairs cost $50.",
//         type: "expense",
//         amount: 50,
//         minweek: 5,
//         weight: 5
//     },
//     {
//         text: "🏥 You have an unexpected medical expense of $45.",
//         type: "expense",
//         amount: 45,
//         minweek: 5,
//         weight: 5
//     },

//     // 📈 INVESTMENT EVENTS
//     {
//         text: "📈 The market had a great week! Your investments gained $10.",
//         type: "investmentGain",
//         amount: 10
//     },
//     {
//         text: "📈 Your investments increased by $5.",
//         type: "investmentGain",
//         amount: 5
//     },
//     {
//         text: "📉 The market had a rough week. Your investments lost $5.",
//         type: "investmentLoss",
//         amount: 5
//     },
//     {
//         text: "🚀 One of your investments performed really well! Gain $15.",
//         type: "investmentGain",
//         amount: 15
//     },
//     {
//         text: "📉 Your investments dropped by $10.",
//         type: "investmentLoss",
//         amount: 10
//     },

//     // 🏦 SAVINGS EVENTS
//     {
//         text: "🏦 Your savings earned a $2 bonus.",
//         type: "savingsGain",
//         amount: 2
//     },
//     {
//         text: "💰 Great saving habits! You earned a $5 savings bonus.",
//         type: "savingsGain",
//         amount: 5
//     },

//     // 😌 NOTHING HAPPENS
//     {
//         text: "😌 It's a quiet week. Nothing unexpected happened!",
//         type: "nothing",
//         amount: 0
//     },
//     {
//         text: "☀️ Everything went according to plan this week.",
//         type: "nothing",
//         amount: 0
//     },
//     {
//         text: "🍀 Lucky week! No unexpected expenses.",
//         type: "nothing",
//         amount: 0
//     }
// ];

let events = [
    // 💰 INCOME EVENTS
    {
        text: "🎂 It's your birthday! You received $10.",
        type: "income",
        amount: 10
    },
    {
        text: "💵 You received an extra $5 in allowance.",
        type: "income",
        amount: 5
    },
    {
        text: "🍋 You helped run a lemonade stand and earned $10.",
        type: "income",
        amount: 10
    },
    {
        text: "🚗 You helped wash a car and earned $5.",
        type: "income",
        amount: 5
    },
    {
        text: "📚 You sold some old books and earned $5.",
        type: "income",
        amount: 5
    },
    {
        text: "🏆 You won a small contest and received $15.",
        type: "income",
        amount: 15
    },
    {
        text: "🎁 A relative gave you $10 as a gift.",
        type: "income",
        amount: 10
    },

    // 💸 EXPENSE + CHOICE EVENTS
    {
        text: "🚲 Your bike needs a repair. It costs $25.",
        type: "expense",
        amount: 25,
        minWeek: 4,
        weight: 3
    },
    {
        text: "🍕 Your friends are getting pizza. It costs $10.",
        type: "choice",
        amount: 10,
        happinessGain: 10,
        happinessLoss: 10
    },
    {
        text: "🎬 You want to see a movie. A ticket costs $15.",
        type: "choice",
        amount: 15,
        happinessGain: 15,
        happinessLoss: 15
    },
    {
        text: "👕 You found a shirt you really like for $25.",
        type: "choice",
        amount: 25,
        happinessGain: 15,
        happinessLoss: 15
    },
    {
        text: "🎮 A new game you want costs $30.",
        type: "choice",
        amount: 30,
        happinessGain: 20,
        happinessLoss: 15
    },
    {
        text: "🍦 You want to get ice cream with your friends for $5.",
        type: "choice",
        amount: 5,
        happinessGain: 10,
        happinessLoss: 10
    },
    {
        text: "🎧 Your headphones broke. Replacing them costs $10.",
        type: "expense",
        amount: 10,
        weight: 1
    },
    {
        text: "📚 You need new school supplies. They cost $5.",
        type: "expense",
        amount: 5,
        weight: 1
    },
    {
        text: "🚌 You need to pay $5 for transportation.",
        type: "expense",
        amount: 5,
        weight: 1
    },
    {
        text: "🍕 You bought food while you were out. It costs $10.",
        type: "expense",
        amount: 10,
        weight: 1
    },
    {
        text: "🔌 Your charging cable broke. A replacement costs $20.",
        type: "expense",
        amount: 20,
        weight: 2
    },
    {
        text: "🎒 Your backpack ripped. A replacement costs $30.",
        type: "expense",
        amount: 30,
        minWeek: 4,
        weight: 3
    },
    {
        text: "💻 You need a small computer accessory for school. Pay $30.",
        type: "expense",
        amount: 30,
        minWeek: 4,
        weight: 3
    },
    {
        text: "📱 Your phone screen cracks. Repairs cost $50.",
        type: "expense",
        amount: 50,
        minWeek: 5,
        weight: 5
    },
    {
        text: "🏥 You have an unexpected medical expense of $45.",
        type: "expense",
        amount: 45,
        minWeek: 5,
        weight: 5
    },

    // 📈 INVESTMENT EVENTS
    {
        text: "📈 The market had a great week! Your investments gained $10.",
        type: "investmentGain",
        amount: 10
    },
    {
        text: "📈 Your investments increased by $5.",
        type: "investmentGain",
        amount: 5
    },
    {
        text: "📉 The market had a rough week. Your investments lost $5.",
        type: "investmentLoss",
        amount: 5
    },
    {
        text: "🚀 One of your investments performed really well! Gain $15.",
        type: "investmentGain",
        amount: 15
    },
    {
        text: "📉 Your investments dropped by $10.",
        type: "investmentLoss",
        amount: 10
    },

    // 🏦 SAVINGS EVENTS
    {
        text: "🏦 Your savings earned a $2 bonus.",
        type: "savingsGain",
        amount: 2
    },
    {
        text: "💰 Great saving habits! You earned a $5 savings bonus.",
        type: "savingsGain",
        amount: 5
    },

    // 😌 NOTHING HAPPENS
    {
        text: "😌 It's a quiet week. Nothing unexpected happened!",
        type: "nothing",
        amount: 0
    },
    {
        text: "☀️ Everything went according to plan this week.",
        type: "nothing",
        amount: 0
    },
    {
        text: "🍀 Lucky week! No unexpected expenses.",
        type: "nothing",
        amount: 0
    }
];

