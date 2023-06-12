const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.listen(PORT, () => {
    console.log("App listening to requests");
});

app.get('/', (req, res) => {
    res.send('Welcome to my server');
});

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});
