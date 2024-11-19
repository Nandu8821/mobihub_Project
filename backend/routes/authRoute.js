
const express = require("express");
const router = express.Router();

const {countUsers, createUser, loginUserCtrl, getalluser, getauser, getauserdelete, getauserupdated, ManageAddress } = require("../controller/userCtrl");

const { ProductAdd, DisplayProduct, DeleteProduct, AddBrand, AddCoupon, DisplayBrands, DeleteBrand, DisplayCoupons, DeleteCoupon,Applycoupon } = require("../controller/AdminControler");

const {CountOrders, OrderStatuschange, CreateOrder,GetOrderData} = require("../controller/OrderController")

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all_users', getalluser);
router.get('/:id', getauser);
router.delete('/:id', getauserdelete);
router.put('/:id', getauserupdated);
router.post('/ProdoctAdd', ProductAdd);
router.post('/DisplayProduct', DisplayProduct);
router.delete('/DeleteProduct/:id', DeleteProduct);
router.post('/ManagedlyAddress', ManageAddress);
router.post("/countusers", countUsers);

// brand API ///////
router.post('/AddBrand', AddBrand);
router.post('/DisplayBrands', DisplayBrands);
router.delete('/DeleteBrand/:itemId', DeleteBrand);


/////// Coupon API //////////////
router.post("/AddCoupon", AddCoupon);
router.post("/DisplayCoupons", DisplayCoupons);
router.delete("/DeleteCoupon/:itemId", DeleteCoupon) ;
router.post("/applycoupon/:couponcode", Applycoupon) ;

////// Order detail///////

router.post("/Createorder", CreateOrder);

router.post("/getOrderData", GetOrderData);

router.post("/orderStatuschange", OrderStatuschange);

router.post("/countOrders", CountOrders);





module.exports = router;

