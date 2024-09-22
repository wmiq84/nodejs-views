const express = require('express');
const path = require('node:path');

const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views')); // for ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
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
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get('/new', (req, res) => res.send('New'));

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});
