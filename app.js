const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static('public')); //esto es un middleware


app.get('/', (req, res) => {
    res.render('home', {
	nombre: 'Ariel Pardo',
	titulo: 'Curso de NodeJs'
    }); 
});

app.get('/generic', (req, res) => {
    res.render('generic', {
	nombre: 'Ariel Pardo',
	titulo: 'Curso de NodeJs'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
	nombre: 'Ariel Pardo',
	titulo: 'Curso de NodeJs'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
      
