cons calculatorScreen = document.querySelectorAll(".calculator-screen")

const updateScreen = (number) => {
 calculatorScreen.value = number
}

cons numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
 number.addEventListener("click", (event) => {
  console.log(event.target.value)
  updateScreen(currentNumber)
 })
})

let prevNumber = ` `
let calculationOperator = ` `
let currentNumber = `0`


const inputNumber = (number) => {
 if (currentNumber ===`0`) {
  currentNumber = number
 } else {
 currentNumber += number
 }
}

const inputOperator = (operator) => {
 if (calculationOperator ===` `) {
  prevNumber = curentnumber
 } 
 calculationOperator = Operator
 currentNumber = `0`
 }
