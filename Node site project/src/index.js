const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
const partialsPath = path.join(__dirname, '../views/partial');

// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Serve static files
app.use(express.static(publicPath));

// Routes
app.get('/', (req, res) => {
    res.render('index', { style: '/style.css' });
});

app.get('/about', (req, res) => {
    res.render('about', { style: '/about.css' });
});

// app.get('*', (req, res) => {
//     res.render('404');
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});