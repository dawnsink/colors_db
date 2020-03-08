//now this file is not needed since we used it to generate server.js
const Datastore = require ("nedb");

const db = new Datastore({filename: "colors.db", autoload: true});

const newColor = {name: "crimson"};

db.insert(newColor, (err, newDoc) => {
    if (err) {
      console.log(err);
    }

    console.log(newDoc);
});
