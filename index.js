const Chance = require("chance")
const chance = new Chance()
let min = 0
let max = 100
const quessingNumber = chance.integer({min: 0, max: 100})
let quessed = false
while (!quessed) {
    const number = chance.integer({min:min, max:max})
    console.log(`Компьютер 2: Пробую число ${number}`);
    if (number === quessingNumber) {
        quessed = true
    } else {
        if (number < quessingNumber) {
            console.log("Компьютер 1: Больше!");
            min = number+1
        }
        else if(number > quessingNumber){
            console.log("Компьютер 1: Меньше!");
            max = number-1
        }
    }
}

console.log("Компьютер 1: Угадал!");