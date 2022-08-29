/*Конструкция switch заменяет собой сразу несколько if.

Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.*/


let firstNumber = parseFloat(parseInt(prompt('Введите 1-ое число')));
let secondNumber = parseFloat(parseInt(prompt('Введите 2-ое число')));
let operator = prompt('Введите оператор','add,multi,subsctract');




  
let result;

switch(operator){
  case 'add' : result = +firstNumber + +secondNumber;
  alert('Результат сложения ' + result);
  break;
  case 'multi' : result = firstNumber * secondNumber;
   alert("Результат вычитания " + result);
  break;
  case 'substract' : result = firstNumber - secondNumber;
   alert("Результат умножения " + result);
  break;
 
  default: result !== 'add', 'multi','subsctract'; alert('Неизвестное значение');
}



    



    

