const User = require('../models/User');
const lodash = require('lodash');
const jwt = require('jsonwebtoken');

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT, {
    expiresIn: process.env.JWTEXP,
  });
};

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ error: 'Invalid / Badly formatted bearer token recieved' });
  }

  const token = bearer.split('Bearer ')[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).send({ error: 'Invalid bearer token recieved' });
  }

  const user = await User.findById(payload.id)
    .select('-password')
    .populate('expenses');
  // .lean()
  // .exec();

  if (lodash.isEmpty(user)) {
    return res.status(401).send({ error: 'User not found' });
  }

  req.user = user;
  next();
};

module.exports = { newToken, verifyToken, protect };
