const express = require('express')

const trackerController = require('../controllers/expense')

const router = express.Router();

router.get('/get-expense',trackerController.getXpenseData);

router.post('/add-expense', trackerController.postXpenseData);

router.delete('/delete-expense/:id', trackerController.deleteData);

module.exports = router
