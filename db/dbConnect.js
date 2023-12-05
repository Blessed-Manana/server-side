const mongoose = require('mongoose');

const offline = "mongodb://kees:simplyme@localhost:27017/?authMechanism=DEFAULT";
const online = "mongodb+srv://mananablessed01:EkLZyFhvCkFda55o@cluster0.k8q59ie.mongodb.net/";

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