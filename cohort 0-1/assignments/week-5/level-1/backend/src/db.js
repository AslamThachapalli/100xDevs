const mongoose = require('mongoose');
const { mongoUrl } = require('./secret');

mongoose.connect(mongoUrl);

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedInUrl: String, 
    twitterUrl: String,
});

const Card = mongoose.model('Card', cardSchema)

module.exports = {Card}