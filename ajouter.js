var app = require('express')();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ajouter.html'));
});

app.post('/data', function(req, res) {
    console.log(req.body.FirstName);
    console.log(req.body.LastName);
    console.log(req.body.NumeroCompte);
    // Add these values to your MySQL database here
});

app.listen(3000);