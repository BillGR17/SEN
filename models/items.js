var sqlite3 = require('sqlite3').verbose(),
    fs = require('fs'),
    db = new sqlite3.Database('../data/items.db');



fs.readFile('../data/items.db', (err, data) => {
  if (err) throw err;
  console.log(data);
});
