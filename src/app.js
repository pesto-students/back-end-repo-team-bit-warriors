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

const app = express();

// Use cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
dbConnect();

app.get('/test', (req, res) => {    
    res.status(200).send("Namaste sabhiko !")
})

app.use('/', authRoutes)
app.use('/users', userRoutes)
app.use('/admin', adminRoutes)
app.use('/malls', mallRoutes)
app.use('/stores', storeRoutes)

module.exports = app

// // Example of authorization for admin also
// app.get('/me', auth, async (req, res) => {
//     const user = await User.findById(req.user._id).select('-password');
    
//     res.send(user);
// }); 



// app.post('/addUser', async (req, res) => {
//     const schema = Joi.object({
//         username: Joi.string().min(5).max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(255).required()
//     });

//     const { error } = schema.validate(req.body);
//     if(error) return res.status(400).send('bad request');

//     let user = await User.findOne({email: req.body.email});
//     if(user) return res.status(400).send('User already registered.');

//     user = new User ({
//         username : req.body.username,
//         email : req.body.email,
//         password : req.body.password
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);

//     await user.save();

//     const register_token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    
//     res.header('x-auth-token', register_token).send({
//         username: user.username,
//         email: user.email
//     });
// });

// app.post('/authuser', async (req, res) => {
//     const schema = Joi.object({
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(255).required()
//     });

//     const { error } = schema.validate(req.body);
//     if(error) return res.status(400).send('bad request');

//     let user = await User.findOne({email: req.body.email});
//     if(!user) return res.status(400).send('Invalid email or password.');

//     const validatePassword = await bcrypt.compare(req.body.password, user.password);  
//     if(!validatePassword) return res.status(400).send('Invalid email or password.');

//     const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });

//     res.header('x-auth-token', token).send(`Authntication Successful.`);
// });

// app.post('/addmall', [auth , adminAuth], (req,res) => {

// });

// for log out of user 
// technically we need to implement log out feature on client 
// logic will be like you simply delete the token from the client.


//401 Unauthorize -- we give it try again to user 
//403 forbidden -- after getting the token also user does not have permission to access the resource
