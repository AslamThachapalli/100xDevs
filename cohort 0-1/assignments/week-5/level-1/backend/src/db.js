const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aslamdevelop:Ass5Mongo@cluster0.vryu7ml.mongodb.net/');

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedInUrl: String, 
    twitterUrl: String,
});

const Card = mongoose.model('Card', cardSchema)

module.exports = {Card}