require ('dotenv').config();
const mongoose = require('mongoose');


const connctDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useCreateIndex: true,
            useUnifiedTopology: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log('Mongodb connected successfully')
        
    } catch (error) {

        console.log('Mongodb connection failed')
        console.log(error)
        process.exit(1);
        
    }

}

module.exports = connctDB;