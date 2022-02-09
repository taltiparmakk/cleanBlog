// cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
// "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
// title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
// Veri tabanımızda 3 adet pos dökümanı oluşturalım.
// Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.



const express = require('express');
const mongoose = require("mongoose");
const app = express();
const ejs= require('ejs');
const path = require("path");
const Blog = require("./controller/BlogController");


 // TEMPLATES ENGINE
 app.set('view engine', 'ejs');

 //MIDDLEWARES
 app.use(express.static("public"));
//gönderilen verileri encoding ediyor
 app.use(express.urlencoded({ extended: true })); 
 app.use(express.json())
 

 //connect DB
mongoose.connect("mongodb://localhost/cleanblog",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Anasayfaya postları göndermek için
app.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.render('index', {
    blogs
        });
    });

app.get('/add_post', (req, res)=> {
res.render("add_post");
 });

app.get('/about', (req, res)=> {
res.render("about");
});

        
    //bodyden gelen requestler
app.post('/blogs', async (req, res) => {
    await Blog.create(req.body) 
    res.redirect("/");
  });

  

const port = 3000;
app.listen(port, ()=> {
    console.log(`basarıyla ${port}'a baglanildi`)
});