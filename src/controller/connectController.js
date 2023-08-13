const Connect = require('../model/Connect'); // Import your User model

const getConnects = async (req, res) => {
    const connectData = await Connect.find().populate("user");
    res.status(200).json(connectData);
}

const getConnect = async(req, res) => {
    const connectId = req.params.id
    const success = await User.findById(connectId)
    res.status(200).json(success)
}

const createConnect = async (req, res) => {
    console.log(req.body)
    const connectData = await Connect.create(req.body);
    res.status(200).json(connectData);
};

const deleteConnect = async(req, res) => {
    const connectId = req.params.id
    const success = await Connect.findByIdAndDelete(connectId)
    res.status(200).json(success)
}

module.exports = {
    getConnect,
    getConnects,
    createConnect,
    deleteConnect
};