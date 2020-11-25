const express = require('express');

const Expense = require('../models/Expense');
const extract = require('../utils/extract');

const router = express.Router();

/**
 * [GET] Get all expenses
 */
router.get('/expenses', async (req, res) => {
  console.log('User ', req.user.id);
  try {
    const expenses = await Expense.find({
      // where: { created_by: req.user.id },
    }).exec();

    // const exp = await Expense.find({
    //   where: { created_by: req.user },
    // }).exec();
    console.log('Expenses ', expenses);

    // console.log(
    //   await Expense.find({ where: { created_by: req.user._id } }).exec()
    // );
    // console.log(
    //   await Expense.find({
    //     where: { created_by: '5f4ab5fefa7d8c75050f8d17' },
    //   }).exec()
    // );

    // console.log(exp[13].created_by);
    const arrExpenses = expenses.map((current) => ({
      strId: current._id,
      strName: current.name,
      strPrice: current.price,
      strType: current.type,
      strDate: current.date,
    }));

    res.json({ data: arrExpenses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [GET] Get single expense
 */
router.get('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ error: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ error: 'Could not find any expense matching that id' });
    }

    res.json({
      strId: expense.id,
      strName: expense.name,
      strPrice: expense.price,
      strType: expense.type,
      strDate: expense.date,
    });
  } catch (error) {
    res.status(500).json({ error: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [POST] Create an expense
 */
router.post('/expenses', async (req, res) => {
  try {
    const created = await Expense.create({
      ...req.body,
      created_by: req.user._id,
    });

    res.json({
      strId: created.id,
      strName: created.name,
      strPrice: created.price,
      strType: created.type,
      strDate: created.date,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not create expense. ${error.message}` });
  }
});

/**
 * [PATCH] Update an expense
 */
router.patch('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ error: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ error: `Could not find any expense matching that id.` });
    }

    await expense.updateOne(req.body);
    const updated = await Expense.findById(id);
    res.json({
      strId: updated.id,
      strName: updated.name,
      strPrice: updated.price,
      strType: updated.type,
      strDate: updated.date,
    });
  } catch (error) {
    res.status(500).json({ error: `Could not get expenses. ${error.reason}` });
  }
});

/**
 * [DELETE] Delete an expense
 */
router.delete('/expenses/:id', async (req, res) => {
  try {
    const id = extract(req.params, 'id');
    if (!id) {
      return res.status(400).json({ error: 'Missing Parameters' });
    }

    const expense = await Expense.findById(id);
    if (!expense) {
      res
        .status(404)
        .json({ error: `Could not find any expense matching that id.` });
    }

    await expense.deleteOne();
    res.json({ data: id });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not delete expense. ${error.reason}` });
  }
});

module.exports = router;
