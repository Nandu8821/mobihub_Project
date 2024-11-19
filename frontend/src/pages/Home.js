import Carousel from "./components/Carousel";
import BestSellers from "./components/BestSellers/BestSellers";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import MoreProduct from "./components/MoreProduct";
import MoreItemsList from "./components/MoreItems/MoreItemsList";
import Onetwo from "./components/Onetwo/Onetwo";


import { useSelector, useDispatch } from "react-redux";
import setAllProducts from "../slice/AllProductSlice"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    // const [productss, setproducts] = useState()
    // const dispatch = useDispatch();
    // const mydaata = useSelector((state) => state.allProducts.allProducts);
    // console.log(mydaata);

    // const mydata = async () => {
    //     const response = await axios.post("http://localhost:5000/api/user/DisplayProduct").then((res) => {
    //         // console.log(res.data, "hello")
    //         // setallproductsdisplay(res.data);
    //         setproducts(res.data);
    //         dispatch(setAllProducts(productss));
    //         // console.log("all product", productss)
    //     })

    // }
    // useEffect(() => {
    //     mydata()
    // }, [])



    return (
        <>
            <Carousel />
            <br />

            <section className="best_seller">
                <>
                    <BestSellers />
                    <br />
                </>
            </section>
            <br />

            <Marquee />
            <br />

            <MoreProduct />

            <br />
            <br />
            <br />
            <br />

            <MoreItemsList />
            <br />
            <br />
            <br />
            <br />
            <Onetwo />

            <Services />
        </>
    )
}

export default Home;
