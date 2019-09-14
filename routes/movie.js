let express = require('express');
let router = express.Router();
let movieAction = require("../actions/movie");

router.get("/", movieAction.getMovieList);
router.get("/:id", movieAction.getMovie);
router.post("/", movieAction.addMovie);
router.delete("/:id", movieAction.deleteMovie);

module.exports = router;