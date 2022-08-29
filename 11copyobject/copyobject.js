//обьект
const person = {
  name: 'Andrey',
  age: 31 
}

// попробуем создать копию объекта
const student =  person;
student.age = 100;
console.log(person);
console.log(student);

//Как создать копию обьекта???

// Вариант 1 (метод Object.assign())

const fireman = Object.assign({}, person, {age: 38, height: '1.8'});

console.log(person);
console.log(fireman);


//Вариант 2 (используем оператор spread)

const obj = {
   one: 1,
   two: 2,
}

const newObj = { ...obj };
console.log(obj);
console.log(newObj);

// копирование не учитывает вложенных объект