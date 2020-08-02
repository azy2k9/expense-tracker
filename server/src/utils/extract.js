const lodash = require('lodash');

module.exports = (req, key) => {
  return lodash.has(req, key) ? req[key] : null;
};
