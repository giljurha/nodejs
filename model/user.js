const mongoose = require("mongoose")
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const userSchema = Schema({
    name : {
        type: String,
        requried: true
    },
    email : {
        type: String,
        requried: true
    },
    password : {
        type: String,
        requried: true
    },
}, {timestamps:true})
userSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.password
    return obj;
}


userSchema.methods.generateToken = async function(){
    const token = jwt.sign({ _id : this.id }, JWT_SECRET_KEY)
    return token
}
const User = mongoose.model("User", userSchema);

module.exports = User;