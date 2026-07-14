const server = require('express');

const app = server();

app.get('/', (req, res) =>{
    res.send('Hello World');
})

app.get('/about', (req, res) =>{
    res.send('About Page');
})

app.listen(3000);