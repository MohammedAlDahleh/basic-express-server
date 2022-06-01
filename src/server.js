'use strict';
const express = require('express');

const app = express();

const logger = require("./middleware/logger");
const validator = require('./middleware/validator');
const pageNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');



app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello word")
})

app.get("/person", validator, (req, res) => {
    res.json({

        name: req.query.name,
    })
})



app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);

})





function start(PORT) {
    app.listen(PORT, () => {
        console.log(`i'm listening on port${PORT}`)
    })
}
app.use(serverError);
app.use('*', pageNotFound);


module.exports = {
    app: app,
    start: start,
}