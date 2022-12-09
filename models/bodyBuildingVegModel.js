const mongoose = require("mongoose");

const bodyBuildingVegSchema = new mongoose.Schema({
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

module.exports = mongoose.model("bodyBuildingVeg",bodyBuildingVegSchema);