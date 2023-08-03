const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try{
        const decoded = jwt.verify(token, process.env.jwtPrivatekey);
        req.user = decoded;
        next();
    }
    catch (ex){
        res.status(400).send('Invalid token.');  
    }
}

module.exports = auth;

// we can addd this method to all the method which is access by admin like adding, deleting, update etc.
