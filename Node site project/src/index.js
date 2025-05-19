const express = require('express');
const path = require('path');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
let webstaticPath = path.join(__dirname, '../views');
let par = path.join(__dirname, '../views/partial');

app.use('/css', express.static(path.join(__dirname, '../css')));

app.set('views', webstaticPath);

hbs.registerPartials(par);

app.get('/', (req, res) => {
    res.render('index', {
        style:"css/style.css",
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        style:"css/about.css",
    });
});

// app.get("*", (req, res) => {
//     res.render('404', {
       
//     });
// });


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


