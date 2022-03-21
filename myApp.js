var express = require('express');
var app = express();

app.get('/api/:date?/', (req, res) => {
    let normalDate = new Date(req.query);
    res.json({
        "test": normalDate
    });
});
