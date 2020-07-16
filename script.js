cons calculatorScreen = document.querySelectorAll(".calculator-screen")

const updateScreen = (number) => {
 calculatorScreen.value = number
}

cons numbers = document.querySelectorAll(".number")
console.log(numbers)
numbers.forEach((number) => {
 console.log(numbers)
 number.addEventListener("click", (event) => {
  console.log("number is pressed")
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
