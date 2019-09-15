const mongoose = require('mongoose');
const keys = require("./keys");
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const mLab = keys.mongoURI;
mongoose.connect(
    mLab,
    options
);

module.exports = mongoose.connection;
