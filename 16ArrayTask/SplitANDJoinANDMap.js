//split и join и map
function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>

        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


//split и его разделители

/*строка.split([разделитель], [максимальное количество элементов])
Пример 1

let str = 'html-css-javascript';
let arr = str.split('-');

console.log(arr)
Результат выполнения кода:

['html', 'css', 'javascript']

Пример 2

let str = 'html-css-javascript';
let arr = str.split('-', 2);

console.log(arr);
Результат выполнения кода:

['html', 'css']

Пример 3
let str = 'abcde';
let arr = str.split('');

console.log(arr);
Результат выполнения кода:

['a', 'b', 'c', 'd', 'e']

Пример 4
let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);

alert(arr); // Вася, Петя

*/

//Метод join

/*
массив.join([разделитель])

let arr = [1, 2, 3];
let str = arr.join('-');

console.log(str);
Результат выполнения кода:

'1-2-3'

let arr = [1, 2, 3];
let str = arr.join('');

console.log(str);
Результат выполнения кода:

'123'


 */

//Метод MAP
/*
let новый массив = массив.map(function(элемент, индекс, массив) {
	код
	return измененный элемент;
})

Создадим массив, каждый элемент которого вдвое больше соответствующего элемента начального массива:

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem) {
	return elem * 2;
});

console.log(result);
Результат выполнения кода:

[2, 4, 5, 8, 10]

Создадим массив, каждый элемент которого получается так - значение элемента умножается на его порядковый номер в массиве:

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem, index) {
	return elem * index;
});

console.log(result);
Результат выполнения кода (первый элемент: 1*0, второй: 2*1, третий: 3*2, четвертый: 4*3, пятый: 5*4):

[0, 2, 6, 12, 20]

При необходимости в третий параметр можно передать сам массив:

let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem, index, arr) {
	тут будет доступен массив arr
});

 */