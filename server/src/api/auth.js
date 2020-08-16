const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
  res.json({
    message: 'login route hit 🔐',
  });
});

module.exports = router;
