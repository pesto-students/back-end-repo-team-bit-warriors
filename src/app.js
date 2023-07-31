const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Namaste sabhiko !")
})

app.listen(3005, () => console.log('app is running on PORT:3005'))