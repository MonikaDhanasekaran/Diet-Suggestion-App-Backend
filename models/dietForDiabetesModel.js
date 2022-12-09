const mongoose = require("mongoose");

const diabetesSchema = new mongoose.Schema({
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("dietDiabetes",diabetesSchema);