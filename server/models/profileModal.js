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
    shop_address: String,
    shop_timing: String,
    delivery_option: String,
    shop_desc: String,
    prod_and_ser: String
})

const ProfileModel = mongoose.model("Profile", ProfileSchema)
module.exports = ProfileModel