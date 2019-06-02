var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));