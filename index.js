import inquirer from "inquirer";
let conversation = {
    "PKR": {
        "USD": 0.0038047407,
        "GBP": 0.00314169022,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.20,
        "PKR": 318.30,
        "GBP": 1
    },
    "USD": {
        "GBP": 0.83,
        "PKR": 265.30,
        "USD": 1
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversation[from][to] * amount;
    console.log(`Your converion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
