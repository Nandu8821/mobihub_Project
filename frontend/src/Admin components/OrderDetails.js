import axios from "axios";
import { useEffect, useState } from "react";

const OrderDetails = () => {
    const [orderdata, setOrderData] = useState([]);
    const [orderStatus, setOrderStatus] = useState("Order Processing")
    const [depen, setDepent]= useState(0);
    useEffect(() => {
        async function fetchOrderData  () {
            try {
                const res = await axios.post("http://localhost:5000/api/user/getOrderData");
                setOrderData(res.data);
               
            } catch (err) {
                console.log(err);
            }
        };

        fetchOrderData();
    }, [depen]);

    const changeOrderStatus = async (e,id) => {
        const newStatus = e.target.value;
        
        alert(id)
        try {
            const res = await axios.post("http://localhost:5000/api/user/orderStatuschange", { id: id,  update_OrderStatus: newStatus });
            
            setDepent(depen+1);
            
        } catch (err) {
            console.log(err);
        }
    };

    const allOrderData = orderdata.map((key, index) => (
        <div  key={index} className="All_order_detail_info">
            <div>{index + 1}.</div>
            <div>{key.Date}</div>
            <div>{key.orderID}</div>
            <div>{key.amount}</div>
            <div>
                <select value={key.OrderStatus} onChange={(e)=>{changeOrderStatus(e,key._id)}} style={{ border: "none" }}>
                    <option value="Order Processing">Order Processing</option>
                    <option value="Shipment">Shipment</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
        </div>
    ));

    return (
        <>
            <div className="All_orders_detail_admin">
                <h1>
                    All Orders
                </h1>
                <div>
                    <nav className="nav_order_detail">
                        <h5>s/n</h5>
                        <h5>Date</h5>
                        <h5>Order ID</h5>
                        <h5>Order Amount </h5>
                        <h5>Order Status</h5>
                    </nav>

                    {allOrderData}

                </div>
            </div>

        </>
    )
}

export default OrderDetails;