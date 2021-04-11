const express = require('express');
const db = require('../database')
const helper = require('../helpers/github.js')


let app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let userName = req.body.userName;
  helper.getReposByUsername(userName)
    .then(response => {
      const id = response.data.id;
      const name = response.data.name;
      const url = response.data.url;
      const followers = response.data.followers;
      db.save({id, name, url, followers})

    });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

