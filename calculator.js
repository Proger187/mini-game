function calculate(number1, number2, operation){
    return operation(number1, number2)
}

const addNumbers = function(number1, number2){
    return number1+number2
}
const subtractNumbers = function(number1, number2){
    return number1-number2
}
const multiplyNumbers = function(number1, number2){
    return number1*number2
}
const divideNumbers = function(number1, number2){
    return number1/number2
}

const operations = {
    add: addNumbers,
    subtract: subtractNumbers,
    multiply: multiplyNumbers,
    divide: divideNumbers
}

const selectedOperation = "add";
console.log(calculate(6, 3, operations[selectedOperation]));