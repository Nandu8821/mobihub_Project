import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { setOrderID } from "../../slice/OrderDetail";

const Upi = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const makePayment = useNavigate();
  const payamount = useSelector((state)=> state.OrderdetailSlice.orderdetail);
  const [forload, setforload] = useState(false);
  const mydispatch= useDispatch();

  const handlePayment = async(e) => {
    e.preventDefault();
    // Implement UPI payment processing logic here (simulated for educational purposes).
    console.log('UPI payment processing...');
    await mydispatch(setOrderID())
    setforload(true)
    setTimeout(() => {
      makePayment('/ordercomplete')
    }, 2500);
    
  };

  return (
    <div className="upi-container">
      <h2>UPI Payment UPI</h2>
      {forload?<Loader/>:
      <form onSubmit={handlePayment} className="upi-form">
      <label>
        UPI ID:
        <input
        
          type="text"
          name="upiId"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="upi-input"
          required
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={payamount.Amount+60}
          onChange={(e) => setAmount(e.target.value)}
          className="upi-input"
          style={{fontSize:"20px"}}
        />
      </label>
      <br />
      <button type="submit" className="upi-button">
        Make UPI Payment
      </button>
    </form>}
      
    </div>
  );
};

export default Upi;
