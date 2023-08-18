const favourit = require('../model/Favourit')

const getFavourit = async(req, res) => {
    FavouritId = req.params.id
    const favouritData = await favourit.findById(FavouritId)
    if (!favouritData) {
        res.status(404).json({message: "Favourit not found"})
    }
    res.status(200).json(favouritData)
}

const createFavourit = async(req, res) => {
    const FavouritDetails = req.body
    const success = await favourit.create(FavouritDetails)
    res.status(200).json(success)
}

module.exports = {getFavourit, createFavourit}
