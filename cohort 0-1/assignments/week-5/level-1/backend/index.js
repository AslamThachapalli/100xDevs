const express = require('express');
const { cardSchema } = require('./src/types');
const { Card } = require('./src/db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/cards', async (req, res) =>  {
    const cards = await Card.find({});

    res.status(200).json({ cards });
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
    const newCard = new Card({
        name: body.name,
        description: body.description,
        interests: body.interests,
        linkedInUrl: body.linkedInUrl,
        twitterUrl: body.twitterUrl,
    });

    newCard.save().then(() => res.status(201).json({
        msg: 'Card created successfully',
    }));
})

app.listen(port, () => {
    console.log(`app started listening on ${port}`)
})