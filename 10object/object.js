// Примитивы - примитивные типы данных
//number,bigint,string,boolean,null, undefined

// Объект – не примитивный тип данных, сложная структура данных
//Object

let a = { //Литеральный способ записи

  name: 'Сем',
  lastName: 'Винчестер',
  age: 29,
  dog:{//другой обьект в обьекте
    name:'Шарик',
    age: 2
  }
};

console.log(a.name);//Обращение к свойствам обьекта
a.name = 'Bob';//Перезапись свойства обьекта
console.log(a.name);

a.count = 7;//Добавления свойств в обьект
console.log(a);


let one = 7;//7

sum(one);
console.log(one);

function sum(a){//Передача по ззначению
  a += 1;
  console.log(a);//8
}


let two = {
  count: 7
}
sum(two);
console.log(two);//8


function sum(a){//Передаётся в функцию по ссылке.Если что то меняется в функции меняется и вне функции
  a.count +=1;
  console.log(a.count);//8
}
//нельзя менять свойства ссылочных типов

function sum(a) {// В этой функции мы не меняем свойства объектов по сcылке
  let NewCount = a.count + 1;
  console.log(NewCount);
  return NewCount;
}

//Сравнение обьектов
let a = {
  name: 'Bob'
}
// эти объекты они похожи но они не равны
let b = {
  name: "Bob",
};


let c = a;//один и тот же обьект

a !== b
c === a

//обьект всегда создаём через const

const a = { 

  name: 'Сем',
  lastName: 'Винчестер',
  age: 29,
}

a.name = 'Dean';
a.age = 89;
//a = {};//const нам запрешает создавать новый обьект в обьекте

delete a.name; //удаление свойств из обьектов



//Самая частая ошибка
const a = {
  name: "Сем",
 
};

console.log(a);
console.log(a.name);
console.log(a.cat);
console.log(a.cat.dog);//написание точки после undefined
//значит свойство cat нету