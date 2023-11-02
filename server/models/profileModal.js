const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    number: String,
    shop_name:String,
    city:String,
    area:String,
    type:String,
    category:String,
    address: String,
    timing: String,
    deliveryOption: String,
    shopDescription: String,
    productsAndServices: String
})

const ProfileModel = mongoose.model("Profile", ProfileSchema)
module.exports = ProfileModel