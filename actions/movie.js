const movieModel = require("../models/movie");

exports.getMovieList = async (req, res, next) => {
    try {
        let result;
        let { title, stars } = req.query;
        !title && stars ? title = "∅" : null;
        if (title || stars) {
            result = await movieModel.find({ $or: [{ title: { $regex: title } }, { stars: { $all: stars } }] }).sort({ title: 1 })
        } else {
            result = await movieModel.find().sort({ title: 1 })
        }
        res.send({
            message: "success",
            result: result
        });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
}

exports.getMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await movieModel.findByIdAndDelete(id);
        res.send({
            message: "success",
            result: movie
        });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
}

exports.addMovie = async (req, res, next) => {
    try {
        const { title, releaseYear, format, stars } = req.body;
        const newMovie = await movieModel.create({ title, releaseYear, format, stars });
        res.send({
            message: "success",
            result: newMovie
        });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
}

exports.deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        await movieModel.findByIdAndDelete(id);
        res.send({
            message: "success",
        });
    } catch (error) {
        res.send({
            message: error.message
        });
    }
}