var express = require('express');
var app = express();
console.log("Hello from myApp");

app.get('/api', (req, res) => {
    console.log("You have reached the 'api' page!");
});

app.get('/api/:date?', (req, res) => {
    let normalDate = new Date(req.query);
    res.json({
        "test": normalDate
    });
});
