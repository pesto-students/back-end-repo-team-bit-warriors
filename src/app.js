require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/db');
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const mallRoutes = require('./routes/mallRoutes')
const storeRoutes = require('./routes/storeRoutes')
const connectRoutes = require('./routes/connectRoutes')

const app = express();

// Use cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
dbConnect();

app.get('/test', (req, res) => {    
    res.status(200).send("Namaste sabhiko !")
});

app.use('/', authRoutes)
app.use('/users', userRoutes)
app.use('/admin', adminRoutes)
app.use('/malls', mallRoutes)
app.use('/stores', storeRoutes)
app.use('/contact', connectRoutes)

module.exports = app
