const mongoose = require("mongoose");

const uricAcidSchema = new mongoose.Schema({
    meal:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("dietUricAcid",uricAcidSchema);