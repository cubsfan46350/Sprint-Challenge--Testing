const express = require('express');
const server = express();
const dB = require('./testData');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'server up' });
});

server.get('/games', async (req, res) => {
    const games = await testData.games;

    res.status(200).json(games);
});

module.exports = server;











server.listen(5000, () => {
    console.log('Listening on Port 5000');
});