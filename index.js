const express = require("express");
const app = express();

const todoListRepo = require("./repository/todo-list");


app.get("/", function(req,res){
    res.send("Hello World");
    res.end();
});


app.get("/todo", function(req,res){
    res.json(todoListRepo.getAll());
    
})


app.listen("3000", function(req,res){
    console.log("Server running on port 3000!");
});