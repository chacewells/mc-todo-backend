const express = require("express");
const app = express();



app.get("/", function(req,res){
    res.send("Hello World");
    res.end();
});

app.listen("3000", function(req,res){
    console.log("Server running on port 3000!");
});