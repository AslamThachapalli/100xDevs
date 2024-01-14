const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send wrong inputs",
        });
        return;
    }

    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false,
    });

    res.status(200).json({
        msg: 'Todo created'
    })
})

app.put('/completed', async (req, res) => {
    const payload = req.body;
    const completedTodo = updateTodo.safeParse(payload);
    if (!completedTodo.success) {
        res.status(411).json({
            msg: "You send wrong inputs",
        });
        return;
    }

    await todo.updateOne({_id: payload.id}, {completed: true});

    res.json({
        msg: 'Todo marked as completed'
    })
})

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
})