const TodoItem = require("../model/TodoItem");

const todoList = [];
let nextId = 1;


function add(description){
    const todoItem = new TodoItem(nextId,description,false);
    todoList.push(todoItem);

    nextId++;
}


function updateId(id,todoItemsUpdates){
    console.log("typeOf id = " + typeof(id))
    console.log("type of todoList[0] = "+ typeof(todoList[0].id));
    const todoItem = todoList.find(item => item.id == id);
    if(todoItemsUpdates.description){
        todoItem.description = todoItemsUpdates.description;
    }
    if(todoItemsUpdates.done != null){
        todoItem.done = todoItemsUpdates.done;
    }
    console.log(todoItem);
}


function getAll(){
    return todoList;
}


module.exports = {add, updateId, getAll};