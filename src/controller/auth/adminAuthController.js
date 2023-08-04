require('dotenv').config()
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../../model/Auth');
const Admin = require('../../model/Admin');

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
        password : req.body.password,
        isAdmin: true
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const register_token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    
    await Admin.create({
        username : user.username,
        email : user.email,
        password : user.password,
        joinedAt: new Date()
    })
    
    res.header('x-auth-token', register_token).send({
        username: user.username,
        email: user.email
    });
};

const login =  async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send('bad request');

    let user = await Auth.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid email or password.');

    const validatePassword = await bcrypt.compare(req.body.password, user.password);  
    if(!validatePassword) return res.status(400).send('Invalid email or password.');

    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });

    await Admin.findOneAndUpdate({email: req.body.email}, {
        $set: {
            'lastLoggedIn' : new Date().toISOString()
        },
    },
    { upsert: true, new: true } 
    )

    res.header('x-auth-token', token).send(`Authentication Successful.`);
};


module.exports = { register, login }
