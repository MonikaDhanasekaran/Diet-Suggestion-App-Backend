const mongoose = require("mongoose");

const saturdaySchema = new mongoose.Schema({
    timing:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    meal:{
        type: String,
        require: true
    },
    image:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("weightGainSaturday",saturdaySchema);