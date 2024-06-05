const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { type : String , required : true, minlength : 3},
    price : {type : Number , required : true },
    quantity : {type : Number , required : true},
    pictures: { type: [String], required: true, validate: [limitThePictureLength, '{PATH} exceeds the limit of 6'] },
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required: true},
})
function limitThePictureLength(val) {
    return val.length <= 6;
  }

module.exports = mongoose.model('Product', productSchema);