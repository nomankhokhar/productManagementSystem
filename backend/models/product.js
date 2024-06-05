const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { type : String , required : true, minlength : 3},
    price : {type : Number , required : true },
    quantity : {type : Number , required : true},
    pictures : {},
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required: true},
})


module.exports = mongoose.model('Product', productSchema);