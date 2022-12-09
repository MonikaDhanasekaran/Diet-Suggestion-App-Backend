const mongoose = require("mongoose");

const thursdaySchema = new mongoose.Schema({
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

module.exports = mongoose.model("weightGainThursday",thursdaySchema);