const AdminModel = require("../models/Admin/Productadd");
const BrandModel = require("../models/Admin/Brand");
const CouponModel = require("../models/Admin/Coupon");

const ProductAdd = async (req, res) => {
    try {
        const myproduct = new AdminModel(req.body);
        console.log(myproduct);
        await myproduct.save();
        console.log("hit")
        res.send("Data successfully saved");
        // You can also include additional logic or response here if needed
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Internal Server Error");
    }
};


// API for display all product 

const DisplayProduct = async (req, res) => {
    try {
        const products = await AdminModel.find();
        res.send(products);
        // console.log(products);
        console.log("all product send by displayproduct api")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// API for delete product from database 

const DeleteProduct = async (req, res) => {

    const delId = req.params.id
    let respo = await AdminModel.deleteOne({ _id: delId })
    // console.log(respo)
    console.log("delete")
}


/////////////////// Brand //////////////////////
const AddBrand = async (req, res) => {
    const brand = await BrandModel.create(req.body)
    res.status(201).json(brand)

}
const DisplayBrands = async (req, res) => {
    try {
        const Brands = await BrandModel.find();
        res.send(Brands);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const DeleteBrand = async (req, res) => {
    const brandId = req.params.itemId;
    let respo = await BrandModel.deleteOne({ _id: brandId })
}

//////// Coupon////////////////
const AddCoupon = async (req, res) => {
    const { Coupon_Name, Discount, Expiry_Date } = req.body;
    // console.log(Coupon_Name, Discount, Expiry_Date)
    const mydata = new CouponModel({
        Coupon_Name,
        Discount,
        Expiry_Date,
        Created_Date: new Date()
    });
    mydata.save();
    res.status(201).json(mydata)
}

const DisplayCoupons = async (req, res) => {
    try {
        const Coupons = await CouponModel.find();
        res.send(Coupons);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}
const DeleteCoupon = async (req, res) => {

    const couponid = req.params.itemId;
    let respo = await CouponModel.deleteOne({ _id: couponid })
}

const Applycoupon = async (req, res) => {
    try {
        const couponCode = req.params.couponcode;
        const coupon = await CouponModel.findOne({ Coupon_Name: couponCode });

        if (!coupon) {
            return res.json("notexist");
        }
        // Check if the current date is before the expiry date
        const currentDate = new Date();
        const expiryDate = new Date(coupon.Expiry_Date);

        if (currentDate > expiryDate) {
            return res.json('Coupon has expired');
        }

        // If the coupon is valid, return it in the response
        res.json(coupon);

    } catch (error) {
        console.error('Error finding coupon:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { ProductAdd, DisplayProduct, DeleteProduct, AddBrand, AddCoupon, DisplayBrands, DeleteBrand, AddCoupon, DisplayCoupons, DeleteCoupon, Applycoupon };