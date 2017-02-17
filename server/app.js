const express = require('express');
const app = express()

app.use(
  require('morgan')('dev'),
  require('body-parser').json(),
  require('cookie-parser')()
)

app.use('/api',require('./api/api'))

module.exports = app;
