const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: { type: String, required: true },
    menu: { type: String, required: true },
    image:{ type: String, required: true },
    price: { type: String, required: true },
    mess_id: { type: mongoose.Schema.Types.ObjectId, ref: "mess", required: true }

})
module.exports = mongoose.model('meal', mealSchema)