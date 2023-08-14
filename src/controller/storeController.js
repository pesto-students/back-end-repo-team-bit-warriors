const Store = require('../model/Store')

const getStore = async(req, res) => {
    storeId = req.params.id
    const storeData = await Store.findById(storeId).populate("mall")
    if (!storeData) {
        res.status(404).json({message: "Store not found"})
    }
    else{

        res.status(200).json(storeData)
    }
}
const getStores = async(req, res) => {
    if(req.query.mall_id){
        const mallId = req.query.mall_id
        console.log("fetching data for mallid", mallId)
        const storeData = await Store.find({mall: mallId}).populate("mall")
        console.log(storeData)
        res.status(200).json(storeData)
    }
    else{
        const storeData = await Store.find()
        res.status(200).json(storeData)
    }
}


const createStore = async(req, res) => {
    const StoreDetails = req.body
    const success = await Store.create(StoreDetails)
    res.status(200).json(success)
}

const updateStore = async(req, res) => {
    const storeId = (req.params.id);
    const StoreDetails = req.body;
    const Store = await Store.findByIdAndUpdate(storeId, StoreDetails, {
        upsert: true
    });
    if (!Store) {
        res.status(404).json({ message: 'Store not found' });
        return;
    }
    res.status(200).json(Store);
}

const deleteStore = async(req, res) => {
    try{
        const storeId = req.params.id;
        const Store = await Store.findByIdAndDelete(storeId);
        if (!Store) {
            res.status(404).json({ message: 'Store not found' });
            return;
        }
    }
    catch{
        res.status(404).json({ message: 'Store not found' });
    }
    res.status(200).json({});
}

module.exports = {
    getStore,
    getStores,
    createStore,
    updateStore,
    deleteStore
}