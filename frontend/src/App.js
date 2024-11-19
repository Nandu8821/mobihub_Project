//pankesh
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Orderdetail from "./pages/Orderdetails";
import Cartpage from "./pages/cartpage";
import Productdetail from "./pages/Productdetail";
import Paymentpage from "./pages/paymentpage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Wishlist from "./pages/Wishlist";
import ManageAddress from "./pages/ManageAddress";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import ProductCard from "./pages/components/ProductCard";



import Dashboard_Admin from "./Admin components/Dashboard_Admin";
import ProductList from "./Admin components/ProductList";
import Addproduct_Admin from "./Admin components/Addproduct_Admin";
import OrderDetails from "./Admin components/OrderDetails";
import AddBrand from "./Admin components/AddBrand";
import AddCoupon from "./Admin components/AddCoupon";
import AdminLayout from "./pages/AdminLayout"
import EditProduct from "./Admin components/EditProduct";

// Css part
import "./css/Home.css";
import "./css/Home_mediaquery.css"
import "./css/Header.css"
import "./css/Footer.css"
import "./css/Login.css"
import "./css/cart.css"
import "./css/Orderdetails.css"
import "./css/OrderDetailsmediaqueries.css"
import "./css/loginmediaqueries.css"
import "./css/Registration.css"
import "./css/registrationmediaqueries.css"
import "./css/productdetail.css"
import "./css/Wishlist.css"
import "./css/manageaddress.css"
import "./css/shop.css"
import "./css/ProductCard.css"
import "./css/Phonepe.css"
import "./css/COD.css"
import "./css/CreditCard.css"
import "./css/Upi.css"
import "./css/AdminLayout.css"
import "./css/Contact.css";

import "./css/AdminComponentCss/Dashboard_Admin.css"
// import "./css/AdminComponentCss/ProductList.css"
import "./css/AdminComponentCss/OrderDetails.css"
import "./css/AdminComponentCss/AddBrand.css"
import "./css/AdminComponentCss/AddCoupon.css"
import "./css/AdminComponentCss/Addproduct_Admin.css"
import Aboutus from "./pages/components/About/Aboutus";
import AddressForm from "./pages/components/AddressFormPage/AddressForm";


import { ToastContainer, toast } from 'react-toastify';
import OrderComplete from "./pages/components/Thankyoupage/OrderComplete";



const App = () => {

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cartpage" element={<Cartpage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/Orderdetail" element={<Orderdetail />} />
            <Route path="/manageaddress" element={<Orderdetail />} />
            <Route path="/Productdetail" element={<Productdetail />} />
            <Route path="/buynow" element={<Paymentpage />} />
            <Route path="/loginpage" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/addressform" element={<AddressForm />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ordercomplete" element={<OrderComplete/>} />

          </Route>

        </Routes>

        <Routes>
          <Route path="/admin_layout" element={<AdminLayout />}>
            <Route index element={<Dashboard_Admin />} />
            <Route path="/admin_layout/Admin_dashboard" element={<Dashboard_Admin />} />
            <Route path="/admin_layout/ProductList" element={<ProductList />} />
            <Route path="/admin_layout/add_product" element={<Addproduct_Admin />} />
            <Route path="/admin_layout/add-brand" element={<AddBrand />} />
            <Route path="/admin_layout/add-coupon" element={<AddCoupon />} />
            <Route path="/admin_layout/orderdetails" element={<OrderDetails />} />
            <Route path="/admin_layout/EditProduct" element={<EditProduct />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )

}
export default App;
