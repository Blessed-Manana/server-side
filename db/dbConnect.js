const mongoose = require('mongoose');

const offline = "mongodb://kees:simplyme@localhost:27017/?authMechanism=DEFAULT";
const online = "mongodb+srv://Kees:ThisPassword@cluster1.navh7lo.mongodb.net/";

async function dbConnect() {
    const tlsOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true, 
        tlsAllowInvalidCertificates: false, 
      };
    mongoose.connect(
        online,
        tlsOptions,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        }
    )
        .then(() => {
            console.log('successfully connected to MongoDB Atlas!')
        })
        .catch((error) => {
            console.log('Unable to connect to MongoDB Atlas!');
            console.error(error)
        })
}

module.exports = dbConnect