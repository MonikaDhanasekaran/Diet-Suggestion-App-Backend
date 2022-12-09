const mongoose = require("mongoose");

const mondaySchema = new mongoose.Schema({
    timing:{
        type: String,
        require: true,
        unique: true
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

module.exports = mongoose.model("weightGainMonday",mondaySchema);