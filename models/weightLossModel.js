const mongoose = require("mongoose");

const weightLossSchema = new mongoose.Schema({
    timing:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("weightLoss",weightLossSchema);