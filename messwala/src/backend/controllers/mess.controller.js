
const express = require('express');

const router = express.Router();
const authorize = require('../middlewares/authorize')
const authenticate = require('../middlewares/authenticate')
const Mess = require('../models/mess.model')
router.post('', authenticate, authorize(["admin"]), async (req, res) => {
    // const user = req.user
    const mess = await Mess.create(req.body);
    return res.status(201).json({ mess })
})

router.get('', async (req, res) => {
    const mess = await Mess.find().populate("user_id").lean().exec()
    return res.status(200).json({ mess })
})
router.get('/:id', async (req, res) => {
    const mess = await Mess.find({ "user_id": { "_id": req.params.id } }).populate("user_id").lean().exec()
    return res.status(200).json({ mess })
})


module.exports = router;
