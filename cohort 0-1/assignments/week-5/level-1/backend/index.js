const express = require('express');
const cardSchema = require('./src/types');
const { Card } = require('./src/db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/cards', (req, res) => {
    console.log('hello world');
})

app.post('/cards', (req, res) => {
    const body = req.body;
    const parsedBody = cardSchema.safeParse(body);
    if(!parsedBody){
        res.status(411).json({
            msg: 'invalid inputs',
        });
        return;
    }
    Card
})

app.listen(port, () => {
    console.log(`app started listening on ${port}`)
})