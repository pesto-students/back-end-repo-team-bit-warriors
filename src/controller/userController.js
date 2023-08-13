const User = require('../model/User'); // Import your User model

const getUsers = async (req, res) => {
    let query = {};

    if (req.query.active) {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        query = {
            lastLoggedIn: {
                $lt: thirtyDaysAgo
            }
        };
    }

    const userData = await User.find(query);
    res.status(200).json(userData);
}

const createUser = async (req, res) => {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
};

const getUser = async(req, res) => {
    const userId = req.params.id
    const success = await User.findById(userId)
    res.status(200).json(success)
}

const updateUser = async(req, res) => {
    const userId = req.params.id
    const userData = req.body;
    const success = await User.findByIdAndUpdate(userId, userData)
    res.status(200).json(success)
}

const deleteUser = async(req, res) => {
    const userId = req.params.id
    const userData = req.body;
    const success = await User.findByIdAndDelete(userId, userData)
    res.status(200).json(success)
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
};