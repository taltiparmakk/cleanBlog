const express = require('express');
const app = express();
const ejs= require('ejs');
const path = require("path");

 // TEMPLATES ENGINE
 app.set('view engine', 'ejs');

 //MIDDLEWARES
 app.use(express.static("public"));

 
app.get('/', (req,res)=>{
res.render("index");
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`basarıyla ${port}'a baglanildi`)
});