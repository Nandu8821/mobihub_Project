import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { setOrderID } from "../../slice/OrderDetail";
import { useDispatch } from 'react-redux';


const COD = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [forload, setforload] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const makePayment = useNavigate();
  const mydispatch = useDispatch();


  const handlePayment = async(e) => {
    e.preventDefault();
    // Implement Cash on Delivery processing logic here (simulated for educational purposes).
    console.log('Processing Cash on Delivery payment:');
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    await mydispatch(setOrderID());
    setforload(true)
    setTimeout(() => {
      makePayment('/ordercomplete')
    }, 2500);
  };

  return (
    <div className="cod-container">
      <h2>Cash on Delivery</h2>
     {forload?<Loader/>:
      <form onSubmit={handlePayment} className="cod-form">
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="cod-input"
        />
      </label>
      <br />
      <label>
        Delivery Address:
        <textarea
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="cod-textarea"
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="cod-input"
        />
      </label>
      <br />
      <button type="submit"  className="cod-button">
        Confirm Cash on Delivery
      </button>
    </form>}

    </div>
  );
};

export default COD;
