Overview
You are building an app that takes data from GitHub's API and stores it in your database. Here is an overview of what you'll need to do:

When a user types in a GitHub username and submits the form, your app should:

1. Send a POST request to your Express server
  A. Ajax to do a post request to Express Server

2. Your server should GET that user's repos from GitHub's API
  A. Express server router receives request sends the request to the controller
  B. The controller recieves the request and if it is not an error sends it to the model
  C. The model receives the request from the controller and request the data from the Github's API

3. Your server should then save the repos to the database
  A. The model takes the Data and sends it to the mongoDB

4. When a user visits or refreshes your page, your app should:
  A. Mongo DB sends the data back to the Model
  B. Model Sends it to the controller
  C. Controller can send it to the router or the client

5. GET the top 25 repos in your express server's database (How will you determine "top" repos? This doesn't mean "most recent")
Take those repos and display them on the page
  A. Client sends Ajax request to server
  B. Server sends Axios or Needle Request to Database
  C. Database responds to server
  D. Server Sends Data back to Client to render





Basic Requirements:
1. DONE Draw a diagram showing how this app works. Make sure your diagram includes the client, server, and database.

2. DONE Explain your diagram to and get it signed off by a fellow student. Then do the same with your staff.

3. DONE Design (draw a schema) a repos Mongoose schema. You can look at data.json to see the structure of the data from GitHub's API. What properties will you need? Once you've figured out your schema, complete repoSchema in database/index.js, using the Mongoose Quick Start Guide  for help.

4. DONE Explain your schema to and get it signed off by a fellow student. Then do the same with your staff.

5. DONE When a user types a GitHub username into the text field, use jQuery's ajax method to send a POST request to /repos (you'll have to fix the bug in the Search Component first).

6. DONE Complete the getReposByUsername function in helpers/github.js. In this function, you'll use the axios npm module to fetch a user's repositories from the GitHub API  .
  A. To access the GitHub API without rate limits, you'll need a personal access token  . Make a copy of config.example.js and rename it to config.js, then add your personal access token.


7. Complete the save function in database/index.js. This function will save the relevant data from the GitHub API into your database.
  A. Ensure there are no duplicate repos. If you happen to import the same repo twice, it should only show up once in your database. See the tips section about considering unique columns.
 Complete the POST /repos endpoint on your Express server - in this route, you'll use your getReposByUsername function to fetch the specified user's GitHub repos, then use your save function to store the repo information into your database.

 Write a GET /repos endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.

 Refactor the client so that when the page loads, the top 25 repos are displayed on the page.

 Make each repo's name in the table link to that repo's page on GitHub.

 After entering a GitHub handle in the form, update the page with the latest top 25 without requiring a page refresh.

 Complete Getting Started on Heroku with Node.js  .

 What config variables will you need to set in order for the deployed version to work? Modify your existing code to use config variables, then set those config variables when you get to that section.
 After completing all of the above requirements, demo your app to your staff and it signed off by them.

