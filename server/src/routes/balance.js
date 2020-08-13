const express = require('express');

const Expense = require('../models/Expense');
const extract = require('../utils/extract');

const router = express.Router();

/**
 * [GET] Get balance
 */
router.get('/balance', async (_, res) => {
  try {
    const totals = await Expense.aggregate().group({
      _id: '$type',
      total: { $sum: '$price' },
    });

    const balance = totals.reduce((accumulatedBalance, current) => {
      return current._id === 'expense'
        ? accumulatedBalance - current.total
        : accumulatedBalance + current.total;
    }, 0);

    res.json(balance);
  } catch (error) {
    res.status(500).json({ message: `Could not get balance. ${error.reason}` });
  }
});

module.exports = router;
