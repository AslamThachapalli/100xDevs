const mongoose = require('mongoose');
const { mongoConnectionString } = require('./secret');

mongoose.connect(mongoConnectionString);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo =  mongoose.model('todos', todoSchema);

module.exports = {
    todo
}