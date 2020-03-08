const Datastore = require ("nedb");

const db = new Datastore({filename: "colors.db", autoload: true});

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/add", (request, response) =>{
    const newAddition = request.body.name;
    addColor(newAddition, (err, newName) => {response.json(newName);});
    console.log(newAddition);
});

function addColor (name, cb){
    db.insert({ name, name}, (err, newName) => {
        cb(err, newName);
    });
}

app.listen(8000, ()=>{
    console.log("I hear you on 8000!")
});