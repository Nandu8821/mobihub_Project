import React, { useState, CSSProperties, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Loader from './Loader';
import { setOrderID } from "../../slice/OrderDetail";

const Phonepe = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [forload, setforload] = useState(false);
  const makePayment = useNavigate();
  const payamount = useSelector((state) => state.OrderdetailSlice.orderdetail);
  const mydispatch= useDispatch();
  const handlePayment = async(e) => {
    e.preventDefault();

    // Implement UPI payment processing logic here (simulated for educational purposes).
    console.log(`Processing UPI payment of ${amount} to ${upiId}`);
    setforload(true);
    await mydispatch(setOrderID())
    setTimeout(() => {
      makePayment('/ordercomplete')
    }, 2500);
    
   
  };

  return (
    <div className="phonepe-container">
      <h2>UPI Payment Phonepe</h2>
      {forload ? <Loader /> :
        <form onSubmit={handlePayment} className="phonepe-form">
          <label>
            UPI ID:
            <input
              type="text"
              name="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="phonepe-input"
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
              className="phonepe-input"
              style={{ fontSize: "20px" }}
            />
          </label>
          <br />
          <button type="submit" className="phonepe-button">
            Make UPI Payment
          </button>
        </form>
      }

    </div>
  );
};

export default Phonepe;
