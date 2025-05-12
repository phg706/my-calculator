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

buttons.forEach((btn) =>

  btn.addEventListener("click", (e) => {
    const clickedNum = e.target.textContent;
    const number = e.target.classList;
    console.log(`Clicked: ${clickedNum}`);
  }
  )
);
// 입력 된 숫자를 저장 

number.forEach((btn) => btn.addEventListener("click", (e) => {
  const clickedNum = e.target.textContent;

  if (display.textContent.trim() === "0" || isoperatorclicked === true) {
    display.textContent = clickedNum;
    isoperatorclicked = false;
  } else {
    display.textContent += clickedNum;
  }

})
);

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    firstOperand = display.textContent;
    operator = e.target.textContent;
    console.log('First Operand:' + firstOperand, '\nOperator:' + operator);
    isoperatorclicked = true;
  })
})
//숫자를 클릭하면 first에 저장 연산자는 oper
function calculate(first, second, op) {
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
n.addEventListener("click", () => {
  secondOperand = display.textContent;
  display.textContent = calculate(Number(firstOperand), Number(secondOperand), operator);
}
)

