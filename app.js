const express = require('express');
const path = require('node:path');

const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

app.get('/', (req, res) => {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.get('/new', (req, res) => {
	res.render('form');
});

app.post('/new', (req, res) => {
    const text = req.body.text;
    const authorName = req.body.authorName;
    
    messages.push({ text: text, user: authorName, added: new Date() });
    res.redirect("/");
});

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
