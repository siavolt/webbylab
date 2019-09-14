const mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({

    title: String,
    releaseYear: Number,
    format: String,
    stars: Array

});

module.exports = mongoose.model("movie", movieSchema);
