const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    size:{type:Number,required:true},
    price:{type:Date,required:true},
    file:{type:String,required:true},

},{
    timestamps:true,
});

const Product = mongoose.model('Exercise',productSchema);

module.export=Product;