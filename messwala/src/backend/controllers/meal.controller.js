const express = require('express');

const router = express.Router();

const Meal = require('../models/meal.model');
router.post('', async (req, res) => {
 
    const meal = await Meal.create(req.body);
    return res.status(201).json({ meal })
})

router.get('', async (req, res) => {
    const meals= await Meal.find().lean().exec()
    return res.status(200).json({ meals })
})

module.exports = router;