const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const todoListRepo = require("./repository/todo-list");


app.get("/", function (req, res) {
    res.send("Hello World");
    res.end();
});


app.get("/todo", function (req, res) {
    res.json(todoListRepo.getAll());
});


app.post("/todo", function (req, res) {
    //req.body = {"description": "walked dog"};
    const description = req.body.description;
    console.log("got description", {description});
    const newTodoItem = todoListRepo.add(description);
    res.json(newTodoItem).location(`http://localhost:3000/todo/${newTodoItem.id}`).send(201).end();
});

app.get("/todo/:id", function (req, res) {
    const todoList = todoListRepo.getAll();
    const todoItem = todoList.find(item => item.id == req.params.id);
    res.json(todoItem);
})

app.put("/todo/:id", function (req, res) {
    const id = req.params.id;
    console.log("id =" + id);
    const todoItemsUpdates = req.body;
    todoListRepo.updateId(id, todoItemsUpdates);
    res.sendStatus(200).end()
})


app.listen("3000", function (req, res) {
    console.log("Server running on port 3000!");
});