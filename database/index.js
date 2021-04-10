const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connected to mongo')
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // Id  Name  Owner  URl  ForkCOunt
  ID: Number,
  Name: String,
  Owner: String,
  URL: String,
  ForkCount: Number

});


//This Creates the model from the schema (class)
let Repo = mongoose.model('Repo', repoSchema);


// Query the repo collection for how many documents are in it and log answer to the console
// Create a new document on the repo collection
// Query the repo collection for how many documents are in it and log answer to the console

// Saves the Repo
let save = (err, myRepo) => {
  Repo.create({ ID: 1, Name: 'Test', Owner: 'Testing', URL: 'Test.com', ForkCount: 5}, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
    }
  })
}

const myRepo = new Repo ({

  ID: 1,
  Name: 'Test',
  Owner: 'Testing',
  URL: 'Test.com',
  ForkCount: 5
});



module.exports.connection = db;
module.exports.save = save;