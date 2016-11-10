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
app.get('/test-db', function(err,res){
    pool.query('SELECT * from supply', function(err, result){
        if(err){
            res.status(500).send(toString());
        }
        else {
            res.send(JSON.stringify(result.rows));
        }
    })
})

app.get('/create-help', function(req,res){
  var name = req.query.name;
  //var address = req.body.address;
  //var phone = req.body.phone;
  //var details = req.body.details;
 //res.send('POST request to the homepage')
 res.send(name)
   // if(err){
     //   res.status(500).status(toString());
       // }
        //else {
          //  console.log('Well done');
        //}
 //   pool.query('INSERT INTO "supply" WHERE (details,phone,name,address) VALUES ($1,$2,$3,$4)', [details,phone,name,address], function(err,res){
   //     if(err) {
     //       res.status(500).send('Something');
       // }
        //else {
          //  res.send('Successfully created');
        //}
    //})
})
app.get('/ui/main.js', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
})

app.get('/ui/main2.js', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'main2.js'));
})

app.get('/ui/main3.js', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'main3.js'));
})

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});

app.get('/ui/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});

app.get('/ui/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.js'));
});

app.get('/ui/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
