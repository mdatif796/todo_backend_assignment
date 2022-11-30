const bodyParser = require('body-parser');
const express = require('express');

// creating app of express
const app = express();
const port = 3000;

// setting up the database
const db = require('./config/databaseConnection');

// for parsing the data which comes from browser
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if(err){console.log("Error in listening on port ", port, err); return;}
    console.log("Express server successfully listening on port ", port);
    return;
})