require('dotenv').config();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../../model/Auth');
const User = require('../../model/User');

const register = async (req, res) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send('bad request');

    let user = await Auth.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered.');

    user = new Auth ({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //const register_token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '86400s' }); //1 day token validity

    User.create({
        username : user.username,
        email : user.email,
        password : user.password,
        joinedAt: new Date()
    })
    
    return res.send(`User Registered Successfully...`);
};

const login =  async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send('bad request');

    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid email or password.');

    const validatePassword = await bcrypt.compare(req.body.password, user.password);  
    if(!validatePassword) return res.status(400).send('Invalid email or password.');

    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '86400s' }); //1 day token validity

    await User.findOneAndUpdate({email: req.body.email}, {
        $set: {
            'lastLoggedIn' : new Date().toISOString()
        },
    },
    { upsert: true, new: true } 
    )

    //res.cookie('authCookie', token, { maxAge: 1 * 24 * 60 * 60 * 1000 }); // 1 days in milliseconds
    res.cookie('authCookie', token, { maxAge: 3600000, secure: true, sameSite: 'none', domain: 'malldekho.onrender.com' });
    return res.send(`Authentication Successful...`);
};


module.exports = { register, login }
