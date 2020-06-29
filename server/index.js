const express = require('express');
const db = require('../db');

// middleware
const bodyParser = require('body-parser');
const path = require('path');

// create express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the index.html in dist folder
app.use('/', express.static(path.join(__dirname, '../client/dist/')));

const port = 3000;

app.listen(port, () => console.log(`Jotting down groceries on port ${port}`));
