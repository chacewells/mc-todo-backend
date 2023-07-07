const TodoItem = require("../model/TodoItem");

const todoList = [new TodoItem(1,"gym", false),new TodoItem(2,"walk dog", false),new TodoItem(3,"groceries", false)];
const nextId = 1;


function add(description){
    let todoItem = {
        id: nextId,
        description,
        done: false
    }

    nextId++;
}


function updateId(id,todoItemsUpdates){
   
}


function getAll(){
    return todoList;
}


module.exports = {add, updateId, getAll};