const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser());

app.post('/events', (req, res) => {

});

app.listen(4003, () => {
    console.log('Listening on port 4003')
});