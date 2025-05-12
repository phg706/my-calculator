const buttons = document.querySelectorAll('.button');
const number = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const n = document.querySelector('.n');

let firstOperand = null;
let secondOperand = null;
let operator = null;
let isoperatorclicked = false;
let result = 0;

operators.forEach((btn) =>{btn.addEventListener("click", (e) => {
  firstOperand = display.textContent;
  operator = e.target.textContent;
  console.log('First Operand:' + firstOperand, '\nOperator:' + operator);
  isoperatorclicked = true;
})}) 

  buttons.forEach((btn) =>
 
    btn.addEventListener("click", (e) => {
    const clickedNum = e.target.textContent;
    const number = e.target.classList;
    console.log(`Clicked: ${clickedNum}`);
    }
  )
  );
  function calculate(first, second, op){
    switch (op) {
      case "/":
        result = first / second;
        break;
      case "*":
        result = first * second;
        break;
      case "-":
        result = first - second;
        break;
      case "+":
        result = first + second;
        break;
    }
    return result   
  }
n.addEventListener("click",() => {
  secondOperand = display.textContent;
  display.textContent= calculate(Number(firstOperand), Number(secondOperand), operator);
}
) 
  number.forEach((btn) => btn.addEventListener("click", (e) => {
    const clickedNum = e.target.textContent;
    
  if (display.textContent.trim() === "0" || isoperatorclicked===true) {
    display.textContent = clickedNum;
    isoperatorclicked = false;
  } else {
    display.textContent += clickedNum;
  }
    
    })
);
