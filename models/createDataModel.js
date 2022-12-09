const mongoose = require("mongoose");

const createDataSchema = new mongoose.Schema({
    timing:{
        type: String,
        require: true,
        unique: true
    },
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("UserCreatedData",createDataSchema);