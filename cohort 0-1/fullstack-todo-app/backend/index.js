const express = require('express');
const { createTodo, updateTodo } = require('./types');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/todos', (req, res) => {
    res.send("Hello");
})

app.post('/todo', (req, res) => {
    const payload = req.body;
    const todo = createTodo.safeParse(payload);
    if(!todo.success){
        res.status(411).json({
            msg: "You send wrong inputs",
        });
        return;
    }


})

app.put('/completed', (req, res) => {
    const payload = req.body;
    const completedTodo = updateTodo.safeParse(payload);
    if(!completedTodo.success){
        res.send(411).json({
            msg: "You send wrong inputs",
        });
        return;
    }
})

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
})