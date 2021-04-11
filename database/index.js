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
  id: Number,
  name: String,
  url: String,
  followers: Number

});


//This Creates the model from the schema (class)
let Repo = mongoose.model('Repo', repoSchema);


// Query the repo collection for how many documents are in it and log answer to the console
// Create a new document on the repo collection
// Query the repo collection for how many documents are in it and log answer to the console

// Saves the Repo
let save = (myRepo) => {

  Repo.create({ id: myRepo.id, name: myRepo.name, url: myRepo.url, followers: myRepo.followers}, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
      Repo.find({}, (err, data) => {
        console.log(data)
      })
    }
  })

}




module.exports = {
  connection: db,
  save: save,
};