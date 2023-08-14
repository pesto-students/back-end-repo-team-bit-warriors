const Mall = require('../model/Mall')

const getMalls = async(req, res) => {
    
    if(req.query.pin){
        const success = await Mall.find({pin: req.query.pin})
        res.status(200).json(success)
    }
    else{

        const success = await Mall.find()
        res.status(200).json(success)
    }
}

const getMall = async(req, res) => {
    mallId = req.params.id
    const mallData = await Mall.findById(mallId)
    if (!mallData) {
        res.status(404).json({message: "Mall not found"})
    }
    res.status(200).json(mallData)
}

const createMall = async(req, res) => {
    const mallDetails = req.body
    console.log(mallDetails)
    const success = await Mall.create(mallDetails)
    res.status(200).json(success)
}

const updateMall = async(req, res) => {
    const mallId = (req.params.id);
    const mallDetails = req.body;
    const mall = await Mall.findByIdAndUpdate(mallId, mallDetails, {
        upsert: true
    });
    if (!mall) {
        res.status(404).json({ message: 'Mall not found' });
        return;
    }
    res.status(200).json(mall);
}

const deleteMall = async(req, res) => {
    try{
        const mallId = req.params.id;
        const mall = await Mall.findByIdAndDelete(mallId);
        if (!mall) {
            res.status(404).json({ message: 'Mall not found' });
            return;
        }
    }
    catch{
        res.status(404).json({ message: 'Mall not found' });
    }
    res.status(200).json({});
}

module.exports = {
    getMall,
    getMalls,
    createMall,
    updateMall,
    deleteMall
}