const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const app = express();
const port = 3000;

const url = 'https://jsonplaceholder.typicode.com/users';


app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.get('/', async (req, res) => {
    const { data } = await axios.get(url);
    res.sendStatus(200).send(data);
});

app.post('/', async (req, res) => {
    const { data } = await axios.post(url);
    res.sendStatus(201).send(data);
});

app.put('/:id', async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const { data } = await axios.put(url+id, body);
    
    res.sendStatus(204);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { data } = await axios.delete(url+id, body);
    
    res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});