// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Require cors 
const cors = require('cors');

//port 
const port = 4800;

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server


app.listen(port, () => {
    console.log("the server is start in port :" + port);
})

// Setup empty JS object to act as endpoint for all routes
let projectData = {};


app.get('/getData', (req, res) => {
    res.send(projectData);
    console.log("getData");
})




app.post('/postData', (req, res) => {
    projectData = req.body;
    res.send(projectData);
    console.log("postData")
})