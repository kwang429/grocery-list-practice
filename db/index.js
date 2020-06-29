const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list-practice', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => console.log('Judging your groceries...'));

let groceriesSchema = mongoose.Schema({
  name: String,
  category: String,
  qty: Number,
  inCart: { type: Boolean, default: false },
});

let Groceries = mongoose.model('Groceries', groceriesSchema);

module.exports = { Groceries };
