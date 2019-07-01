let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
    UserId: {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    productId: {
        type : Schema.Types.ObjectId,
        ref : "Product",
    },
    amount : {
        type : Number,
        default : 1,
    },
    status: {
        type: Boolean,
    },
},{timestamps:true});

let Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction