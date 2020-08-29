const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const database = require('./database');

const cors = require('cors');

require('dotenv').config();

const expenses = require('./api/expenses');
const balance = require('./api/balance');
const auth = require('./api/auth');

const app = express();

database.connect();

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'development'
        ? process.env.CORS_ORIGIN_LOCALHOST
        : process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Index route',
  });
});

//Setup routes
app.use('/api/v1', expenses);
app.use('/api/v1', balance);
app.use('/api/v1/auth', auth);

module.exports = app;
