let firstNumber = +prompt("Введите 1-ое число");
let secondNumber = +prompt("Введите 2-ое число");
let operator = prompt("Введите оператор", "add,multi,sub");

function Calc(operator, firstNumber, secondNumber) {
  
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
      return "Невернные данные!";
  }


  const operations = {
    add: '+',
    sub: '-',
    multi: '*',
  };

  switch (operations[operator]) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
      default:
  }
}

alert("Результат выражения " + Calc(operator, firstNumber, secondNumber));

