const express = require('express');
const path = require('node:path'); 

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views')); // for ejs
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});