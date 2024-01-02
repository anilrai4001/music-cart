const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type:String,required:true},
    fullName: {type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    color:{type:String,required:true},
    about:{type:Array,required:true},
    available:{type:String,required:true},
    images:{type:Array,required:true}
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product