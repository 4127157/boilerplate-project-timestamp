const express = require('express');
const app = express();
console.log("Hello from myApp");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get('/api', function (req, res) {
    console.log("You have reached the 'api' page!");
    res.json({
        "default": "Default message"
    });
});

app.get('/api/:date?',function (req, res) {
    let normalDate = new Date(req.query);
    res.json({
        "test": normalDate
    });
});
