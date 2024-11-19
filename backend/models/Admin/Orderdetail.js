const mongoose = require('mongoose');

// Schema definition
const orderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orderID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    Date:{
      type:Date,
      default:new Date()
    },
    OrderStatus:{
      type:String,
      default:"pending"
    }
});

// Model creation
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
