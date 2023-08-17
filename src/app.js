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
const discountRoutes = require('./routes/discountRoutes')
const discountTypeRoutes = require('./routes/discountTypeRoutes')
const favouritRoutes = require('./routes/favouritRoutes')
const cookieParser = require('cookie-parser');

const app = express();

// Use cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
app.use(cookieParser());
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
app.use('/discount', discountRoutes)
app.use('/discount-type', discountTypeRoutes)
app.user('/favourit', favouritRoutes)

module.exports = app
