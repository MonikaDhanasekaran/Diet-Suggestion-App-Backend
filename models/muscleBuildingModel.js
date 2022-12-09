const mongoose = require("mongoose");

const muscleSchema = new mongoose.Schema({
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("muscleBuilding",muscleSchema);