const mongoose = require("mongoose");
const myCouponSchema = new mongoose.Schema({
        Coupon_Name: {
                type: String,
                required: true
        },
        Discount: {
                type: String,
                required: true
        },
        Expiry_Date: {
                type: String,
                required: true
        },
        Created_Date: {
                type: Date,
                default: Date.now
        }
})
module.exports = mongoose.model("coupon", myCouponSchema)  //