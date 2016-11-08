var express = require('express');
var morgan = require('morgan');
var path = require('path');
var http = require('http');
var Pool = require('pg').Pool;

var config = {
  host: 'db.imad.hasura-app.io',
  port: '5432',
  user: 'adi2342',
  password: 'db-adi2342-47571',
  database: 'adi2342'
};

var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// When user requests for form to fill details about help he can offer, this file is fetched
app.get('/list-help', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'listhelp.html'));
})

var pool = new Pool(config);
app.get('/test-db', function(err,results){
    pool.query('SELECT * from supply', function(err, results){
        if(err){
            res.status(500).send(toString());
        }
        else {
            res.send(JSON.stringify(results));
        }
    })
})

app.get('/ui/main.js', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
