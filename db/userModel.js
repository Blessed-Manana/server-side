const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide an User name!"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    dateOfBirth: {
        type: String,
        required: [true, "Please provide an date of birth!"],
        unique: false,
    },
    password: {
        type: String,
        require: [true, "Please provide a password!"],
        unique: false,
    },
})


module.exports = mongoose.model("User", UserSchema);