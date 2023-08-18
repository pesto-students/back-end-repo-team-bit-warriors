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
// const corsOptions = {
//     origin: 'https://malldekho.onrender.com',
//     credentials: true
// }
//app.use(cors(corsOptions));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "https://malldekho.onrender.com");
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization, Access-Control-Allow-Origin');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Pass to next layer of middleware
    next();
  }
);
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
app.use('/favourit', favouritRoutes)

module.exports = app
