const express = require('express');

const Expense = require('../models/Expense');
const extract = require('../utils/extract');

const router = express.Router();

/**
 * [GET] Get all expenses
 */
router.get('/expenses', async (_, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [GET] Get single expense
 */
router.get('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ message: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ message: 'Could not find any expense matching that id' });
    }

    res.json(expense);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [POST] Create an expense
 */
router.post('/expenses', async (req, res) => {
  try {
    const created = await Expense.create(req.body);
    res.json(created);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not create expense. ${error.reason}` });
  }
});

/**
 * [PATCH] Update an expense
 */
router.patch('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ message: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ message: `Could not find any expense matching that id.` });
    }

    await expense.updateOne(req.body);
    const updated = await Expense.findById(id);
    res.json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [DELETE] Delete an expense
 */
router.delete('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ message: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ message: `Could not find any expense matching that id.` });
    }

    await expense.deleteOne();
    res.send({ message: 'Successfully deleted expense' });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Could not delete expense. ${error.reason}` });
  }
});

module.exports = router;
