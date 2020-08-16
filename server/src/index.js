const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const expenses = require('./api/expenses');
const balance = require('./api/balance');
const auth = require('./api/auth');

const app = express();

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Successfully connected to DB...')
);

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
