const list = [];
const STATUS = {
  TO_DO: "ToDo",
  IN_PROGRESS: "InProgress",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low"
}


const addTask = function(name, status , priority){
  if (typeof name === "string" && typeof status === "string" && typeof priority === "string") {
    const todo = {
      name,
      status,
      priority,
    };
    list.push(todo);
    console.log('Задача Добавлена!');
  }else if ( status !== STATUS.TO_DO && status !== STATUS.IN_PROGRESS && status !== STATUS.DONE) {
    console.log("Неверный статус задачи!");
  } else if (priority !== PRIORITY.HIGH && priority != PRIORITY.LOW) {
    console.log("Неверный приоретет!");
  }
};


const changeStatus = function(name, status){
  let result = list.find(item => item.name === name);
    result.status = status;
    console.log("Статус задачи Обновлён!");
    return result;
  
};



const deleteTask = function (name) {
  let deleteName = list.findIndex(function (item) {
    return item.name === name;
  });
  if (deleteName === -1) {
    console.log("Такой задачи нет");
  } else {
    list.splice(deleteName, 1);
    console.log("Задача удалена!");
  }
};



const showList = function(){
  let result = list.sort(function(a,b){
    if(a['status'] > b['status']) return -1;
  });
  console.log(result);
  
};




addTask( 1, 2, 3);
addTask("Добавь что  то 1", "2" , 2);
addTask("Добавь что  то 2", STATUS.IN_PROGRESS, 3);
addTask("Купить колбасу" ,STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask("Купить катофель", STATUS.DONE ,PRIORITY.LOW);
addTask("Купить пиццу" ,STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask("Купить макароны", STATUS.DONE ,PRIORITY.LOW);
addTask("Купить кофе", STATUS.TO_DO ,PRIORITY.LOW);
addTask("Купить хлеб", STATUS.IN_PROGRESS , PRIORITY.HIGH);


changeStatus("Купить хлеб", STATUS.TO_DO);

deleteTask("Купить макароны", STATUS.DONE ,PRIORITY.LOW);
deleteTask(" ", STATUS.DONE ,PRIORITY.LOW);



showList();
