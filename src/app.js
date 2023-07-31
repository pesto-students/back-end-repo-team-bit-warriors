const express = require('express');
const { ConnectDB } = require('./database.js');
const bodyParser = require('body-parser');
require('dotenv').config();
const auth = require('./src/middleware/auth.js');
const adminAuth = require('./src/middleware/admin.js');
const userrouter = require("./src/routes/users.routes.js");

const app = express();
app.use(bodyParser.urlencoded({extended : false}))
ConnectDB();

app.use(express.json());
app.use(userrouter);
app.get('/test', (req, res) => {
    res.status(200).send("Namaste sabhiko !")
})


app.listen(process.env.PORT, (error) => {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log(`Your app is listening on port nume ${process.env.PORT}`);
    }
});

//Example of authorization for admin also
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
