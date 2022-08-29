const TodoList = {};


function AddTask(task,done){
    TodoList[task] = done;
}

function deleteTask(task){
    delete TodoList[task];
}

function changeStatus(task, done){
    TodoList[task] = done;
}

function snowList() {
    console.log(TodoList);
}



AddTask('купить колбасу' ,'невыполнено');
AddTask('купить чай');
AddTask('купить хлеб');
changeStatus('купить чай', 'выполнено');
deleteTask('купить хлеб');
snowList();










