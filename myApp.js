var express = require('express');
var app = express();
console.log("Hello from myApp");

app.use((req, res, next) => {
    res.json({
        "test message":"You're seeing this message for no reason"
    });
    next();
});

app.get('/api', (req, res) => {
    console.log("You have reached the 'api' page!");
    res.json({
        "default": "Default message"
    });
});

app.get('/api/:date?', (req, res) => {
    let normalDate = new Date(req.query);
    res.json({
        "test": normalDate
    });
});
