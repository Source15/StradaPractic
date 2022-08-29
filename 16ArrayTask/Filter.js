//Метод filter
//Фильтрация по диапозону
/*
 let новый массив = массив.filter(function(элемент, индекс, массив) {
	код
	return true или false
})
*/


/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.
*/
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
  return arr.filter(item => (a <= item && item <= b));
}

console.log(filterRange(arr, 1 , 4));