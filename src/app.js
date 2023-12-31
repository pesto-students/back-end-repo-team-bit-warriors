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
//     origin: ['https://malldekho.onrender.com',],
//     credentials: true
// }
// var whitelist = ['https://malldekho.onrender.com', 'https://malldekho-admin.onrender.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// Use cors middleware
const corsOptions = {
    origin: ['https://malldekho.onrender.com', 'https://malldekho-admin.onrender.com'],
    credentials: true
}
app.use(cors(corsOptions));
app.use(cookieParser());
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
app.use('/discount', discountRoutes)
app.use('/discount-type', discountTypeRoutes)
app.use('/favourit', favouritRoutes)

module.exports = app
