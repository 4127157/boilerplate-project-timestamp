// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', function (req, res) {
    let test;

    if (isNaN(req.params.date)){
        test = req.params.date;
    }
    else {
        test = parseInt(req.params.date);
    }

    console.log(test);
    let dateHolderUtc,
        dateHolderUnix,
        object;
    
   if(!req.params.date){
        dateHolderUtc = new Date().toUTCString();
        dateHolderUnix = Date.parse(dateHolderUtc);
        object = {
            "unix":dateHolderUnix,
            "utc":dateHolderUtc
        };
    } else if(new Date(test).toDateString() == "Invalid Date" 
        || new Date(parseInt(test)).toDateString() == "Invalid Date"){
        object = {"error": "Invalid Date"};
   } else {
       dateHolderUtc = new Date(test).toUTCString();
       dateHolderUnix = Date.parse(dateHolderUtc);
       object = {
           "unix": dateHolderUnix,
           "utc": dateHolderUtc
       };
   }

    return res.json(object);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
