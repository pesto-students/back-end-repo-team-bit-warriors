const Joi = require('joi');
const { User } = require('../model/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send('bad request');

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered.');

    user = new User ({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const register_token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    
    res.header('x-auth-token', register_token).send({
        username: user.username,
        email: user.email
    });
};

const adminRegister = async (req, res) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send('bad request');

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered.');

    user = new User ({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const register_token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });
    
    res.header('x-auth-token', register_token).send({
        username: user.username,
        email: user.email
    });
};

const userAuth =  async (req, res) => {
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

    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });

    res.header('x-auth-token', token).send(`Authntication Successful.`);
};

const adminAuth =  async (req, res) => {
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

    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin}, process.env.jwtPrivatekey, { expiresIn: '600s' });

    res.header('x-auth-token', token).send(`Authntication Successful.`);
};


module.exports = { userRegister, adminRegister, userAuth, adminAuth}
