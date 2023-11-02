const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    number: String,
    shop_name:String,
    city:String,
    area:String,
    type:String,
    category:String,
})

const ShopModel = mongoose.model("Shops", ShopSchema)
module.exports = ShopModel