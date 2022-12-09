const mongoose = require("mongoose");

const aciditySchema = new mongoose.Schema({
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("dietAcidity",aciditySchema);