const express = require('express');
const extract = require('../utils/extract');
const { newToken } = require('../utils/jwt');
const lodash = require('lodash');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const email = extract(req.body, 'email');
  const password = extract(req.body, 'password');

  if (lodash.isNil(email) || lodash.isNil(password)) {
    return res
      .status(422)
      .json({ error: 'You must provide an email and password' });
  }

  try {
    const doc = await User.create({ email, password });
    const token = newToken(doc);
    return res.status(201).send({ data: token });
  } catch (error) {
    const errorMessage =
      error.code === 11000 ? 'Email already has an account' : error;
    return res.status(400).json({ error: errorMessage });
  }
});

router.post('/login', async (req, res) => {
  const email = extract(req.body, 'email');
  const password = extract(req.body, 'password');

  if (lodash.isNil(email) || lodash.isNil(password)) {
    return res
      .status(422)
      .json({ error: 'You must provide an email and password' });
  }

  try {
    const user = await User.findOne({ email }).select('email password').exec();

    if (lodash.isEmpty(user)) {
      return res
        .status(400)
        .json({ error: 'No user found matching the credentials provided' });
    }

    const match = await user.verifyPassword(password);

    if (!match) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = newToken(user);
    return res.status(201).send({ data: token });
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'Could not login with the credentials provided' });
  }
});

module.exports = router;
