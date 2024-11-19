import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { setOrderID } from "../../slice/OrderDetail";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [forload, setforload] = useState(false);
  const [cvc, setCvc] = useState('');
  const makePayment = useNavigate();
  const payamount = useSelector((state) => state.OrderdetailSlice.orderdetail);
  const mydispatch = useDispatch();

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment processing logic here (e.g., through a secure payment gateway).
    // For security reasons, do not handle real payments or store sensitive information on the client side.
    console.log('Payment processing...');
    setforload(true)
    mydispatch(setOrderID());
    setTimeout(() => {
      makePayment('/ordercomplete')
    }, 2500);
  };

  return (
    <div className="credit-card-container">
      <h2>Credit Card Payment</h2>
      {forload?<Loader/>:
      <form onSubmit={handlePayment} className="credit-card-form">
      <label>
        Card Number:
        <input
          type="number"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="credit-card-input"
          maxLength="16"
          required
        />
      </label>
      <br />
      <label>
        Card Holder:
        <input
          type="text"
          name="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          className="credit-card-input"
          required
        />
      </label>
      <br />
      <label>
        Expiry Date:
        <input
          type="date"
          name="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          maxLength="5"
          className="credit-card-input"
          required
        />
      </label>
      <br />
      <label>
        CVC:
        <input
          type="text"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength="3"
          className="credit-card-input"
          required
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="text"
          name="payamount"
          value={payamount.Amount+60}
          className="credit-card-input"
          style={{fontSize:"20px"}}
        />
      </label> 
      <br/>
      <button type="submit" className="credit-card-button">
        Process Payment
      </button>
    </form>}
     
    </div>
  );
};

export default CreditCard;
