const express = require("express");
const app = express();
app.use(express.json());

const todoListRepo = require("./repository/todo-list");


app.get("/", function(req,res){
    res.send("Hello World");
    res.end();
});


app.get("/todo", function(req,res){
    res.json(todoListRepo.getAll());
    
});


app.post("/todo", function(req,res){
    //req.body = {"description": "walked dog"};
    const description = req.body.description;
    todoListRepo.add(description);
    res.send(201).end();
});

app.get("/todo/:id", function(req,res){
    const todoList = todoListRepo.getAll();
    const todoItem = todoList.find(item => item.id == req.params.id);
    res.json(todoItem);
})

app.put("/todo/:id", function(req,res){
   const id = req.params.id;
   console.log("id =" + id);
   const todoItemsUpdates = req.body;
   todoListRepo.updateId(id,todoItemsUpdates);
    res.sendStatus(200).end()
})


app.listen("3000", function(req,res){
    console.log("Server running on port 3000!");
});