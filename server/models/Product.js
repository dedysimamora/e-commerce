let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    },
    category: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    photo: {
        type: String,
        required : true,
    },
    qty : {
        type: Number,
        required : true,
    }
},{timestamps:true});

let Product = mongoose.model('Product', productSchema);

module.exports = Product
