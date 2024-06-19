const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
    try {
        const query = req.query.q;
        const items = await Item.find({ name: new RegExp(query, 'i') });
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send('Item added successfully');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
