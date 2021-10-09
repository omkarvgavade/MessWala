
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

router.get('', authenticate, async (req, res) => {
    const mess = await Mess.find().lean().exec()
    return res.status(200).json({ mess })
})


module.exports = router;
