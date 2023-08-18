require('dotenv').config()
const app = require("./src/app")


// app.listen(3005, () => console.log('app is running on PORT:3005'))
// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log(`Your app is listening on port  ${PORT}`);
    }
});