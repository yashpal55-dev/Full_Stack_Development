const express = require("express");
const path = require("path");
const hbs = require("hbs");

let app = express();

app.set('view engine', 'hbs');
let webstatic = path.join(__dirname,("../views"));
let par = path.join(__dirname,("../views/partial"));

app.use('/css',express.static(path.join(__dirname,("../css"))));

app.set("views",webstatic);

hbs.registerPartials(par)

app.get("/",(req,res)=>{
    res.render("index",{
        style:"style.css",
        
    });

});
app.get("/about",(req,res)=>{
    res.render("about");

});
app.get("/about/xyz",(req,res)=>{
    res.render("xyz");

});
app.get("*",(req,res)=>{
    res.render("404");

});


app.listen(10000,()=>{
    console.log("Server succesfully Created");

});


