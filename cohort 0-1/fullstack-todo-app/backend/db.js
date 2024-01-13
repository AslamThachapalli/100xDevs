const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aslamdevelop:Ass5Mongo@cluster0.vryu7ml.mongodb.net/todos')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo =  mongoose.model('todos', todoSchema);

module.exports = {
    todo
}