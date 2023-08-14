require('dotenv').config()
const mongoose = require('mongoose');

async function dbConnect(){
    try{    
        return await mongoose.connect(process.env.DB_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    }
    catch(error){
        console.log('Error while making DB connection : ', error);
    }
}
module.exports = dbConnect