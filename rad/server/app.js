const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// body parsing middleware
app.use(json);
app.use(express.urlencoded({extended: true}));

// serve static files
// __dirname is the directory that the executing script resides from
app.use(express.static(path.join(__dirname, '/public')));

// all api calls route to routers
app.use('/api', require('./routers'));

// serve up index.html for SPA
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html');
})

// handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.')
})
