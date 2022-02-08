const express = require('express');
const app = express();
const ejs= require('ejs');
const path = require("path");

 // TEMPLATES ENGINE
 app.set('view engine', 'ejs');

 //MIDDLEWARES
 app.use(express.static("public"));

 
app.get('/', (req, res)=> {
res.render("index");
});

app.get('/add_post', (req, res)=> {
res.render("add_post");
 });

app.get('/about', (req, res)=> {
res.render("about");
});

 app.get('/post', (req, res)=> {
 res.render("post");
 });

const port = 3000;
app.listen(port, ()=> {
    console.log(`basarıyla ${port}'a baglanildi`)
});