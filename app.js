const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

//middleware used

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`running on port ${port}`);
});

const orders = [];