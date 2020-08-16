const express = require('express');

const Expense = require('../models/Expense');

const router = express.Router();

/**
 * [GET] Get balance
 */
router.get('/stats/balance', async (_, res) => {
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

/**
 * [GET] Get total income
 */
router.get('/stats/income', async (_, res) => {
  try {
    const income = await Expense.aggregate()
      .match({
        type: 'income',
      })
      .group({
        _id: '$type',
        total: { $sum: '$price' },
      });

    const totalIncome = income.reduce((acc, current) => {
      return acc + current.total;
    }, 0);

    res.json(totalIncome);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not get total income. ${error.reason}` });
  }
});

/**
 * [GET] Get total expense
 */
router.get('/stats/expense', async (_, res) => {
  try {
    const expense = await Expense.aggregate()
      .match({
        type: 'expense',
      })
      .group({
        _id: '$type',
        total: { $sum: '$price' },
      });

    const totalExpense = expense.reduce((acc, current) => {
      return acc + current.total;
    }, 0);

    res.json(totalExpense);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not get total expense. ${error.reason}` });
  }
});

module.exports = router;
