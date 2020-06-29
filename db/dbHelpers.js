const groceries = require('./index.js').Groceries;

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      groceries.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
};
