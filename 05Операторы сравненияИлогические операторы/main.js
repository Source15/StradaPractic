//Операторы сравнения
// > <
// >= <=
// ==
// ===
// !=
//!==






//Нестрогое сравнение приводит к числу
console.log(4 > null);//null привротится в 0
console.log(4 < '5');//js преобразует строку "5" к числу 5

console.log(0 == '0');//js преобразует строку "0" к числу 0

//Строгое сравнение которое не приводит типы(разные типы данных) если типы разные они не равны
console.log(0 === "0");



console.log(4 > 3);
console.log(4 < 5);
console.log(4 >= 4);
console.log(5 <= 5);
console.log(6 == 6);
console.log(7 != 8);
console.log(4 < 3);
console.log(7 != 7);



//0, null, undefined,NaN "" - Всегда FALSE


//Логические операторы
//! оператор не (преобразует к логическому типу)
console.log(!true);//тут  даст false потому что не true это false
console.log(!false);//тут  даст true потому что не false это true
console.log(!'1233');

//&& оператор и все выражения должны быть истина
console.log(true && true && true);//true
console.log(false && true && true);//false

// || оператор или хотя бы один операнд должен быть истиной

console.log(true || true || true);//true
console.log(false || true || true);//true
console.log(false || false);//false

//Возврашение значений логических операторов

console.log('' && 1 && 2);// выполнение кода прирвётся Так как пустая строка это false
console.log(0 && 1 && 2);// вернется 0

//ОДНА ИДЕЯ
/* результатом логческих операторов  || && Является тот элемент на котором закончилась проверка*/


