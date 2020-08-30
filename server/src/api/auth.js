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
      .json({ message: 'You must provide an email and password' });
  }

  try {
    const doc = await User.create({ email, password });
    const token = newToken(doc);
    return res.status(201).send({ token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  const email = extract(req.body, 'email');
  const password = extract(req.body, 'password');

  if (lodash.isNil(email) || lodash.isNil(password)) {
    return res
      .status(422)
      .json({ message: 'You must provide an email and password' });
  }

  try {
    const user = await User.findOne({ email }).select('email password').exec();

    if (lodash.isEmpty(user)) {
      return res
        .status(400)
        .json({ message: 'No user found matching the credentials provided' });
    }

    const match = await user.verifyPassword(password);

    if (!match) {
      return res.status(401).json({ err: 'Incorrect password' });
    }

    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err });
  }
});

module.exports = router;
