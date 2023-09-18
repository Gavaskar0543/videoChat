const express = require('express');
const port = 8000;
const server = express();
const db = require('./config/mongoose');

server.use('/',require('./router'));
server.listen(port,(err) =>{
    err ? console.log(err.message)  : console.log(`server upon port:${port}`);
});

