let a = +prompt('Введите 1-ое число');
let b = +prompt('Введите 2-ое число');
let operator = prompt('Введите оператор')





function calc(operator){
  if(operator === '+'){
    return a + b;
  }else if(operator === '-'){
    return a - b ;
  }else if (operator === '*'){
    return a * b;
  }else if (operator !== '+' ){
    return alert('Вы ввели не тот оператор!');
  }else if(operator !== '-' ){
    return alert('Вы ввели не тот оператор!');
  }else(operator !== '*')
  return alert('Вы ввели не тот оператор!');
  
  
}


alert(calc(operator));

    

