const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
  mongoose,
  connect: () => {
    mongoose.connect(
      process.env.NODE_ENV === 'development'
        ? process.env.DATABASE_URL_LOCALHOST
        : process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log('Successfully connected to DB...')
    );
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
};
