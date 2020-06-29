const express = require('express');
const dbHelpers = require('../db/dbHelpers.js');

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

/*-- API CALLS --*/
app.get('/getAll', (req, res) => {
  dbHelpers
    .getAll()
    .then((docs) => {
      console.log('hello from app.get');
      res.status(200).send(docs);
    })
    .catch((err) => {
      console.log(`err in app.get ${err}`);
      res.status(404).send(`Err in app.get: ${err}`);
    });
});

app.delete('/deleteOne', ({ body }, res) => {
  dbHelpers
    .deleteOne(body.name)
    .then(() => {
      res.status(200).send(`Removed ${body.name} from grocery list`);
    })
    .catch(() => res.status(404).send(`Err in app.delete: ${err}`));
});
