// все что мы пишем в инструкции if Приводится к булевому типу true или false

//Условие if выаолниться только при true
if (1) {
  alert( 'Привет' );
}

//else выполняеться когда значение false
/* это инструкция читается как если условия ложная то выполнится второй блок кода
 */
if (false){
  console.log('2');
} else {
  console.log('2.2');
}

// два блока кода одновременно выполняться не могут либо выполняется if при правде(true)
// либо выполнится else ложь (false)

if (false){
  console.log('2');
} else if{
  console.log('2.2');
}else{
  console.log('2');
}

//Тернарный оператор

условие ? Выражение 1 : Выражение 2

//если условие правдиво то возврашается результат выражениея 1
//если условие ложно , тогда возврашаеться результат выражения 2