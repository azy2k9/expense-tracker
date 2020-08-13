const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const expenses = require('./routes/expenses');
const balance = require('./routes/balance');

const app = express();

mongoose.connect(
  `mongodb://${process.env.MONGO_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Successfully connected to DB...')
);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Index route',
  });
});

//Setup routes
app.use('/api/v1', expenses);
app.use('/api/v1', balance);

module.exports = app;
