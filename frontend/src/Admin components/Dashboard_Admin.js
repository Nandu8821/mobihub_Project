import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
const Dashboard_Admin = () => {
  const [user, setuser]= useState(0);
  const [allorder , setAllorder]= useState(0);
  const [revenue, setRevenue]= useState([]);

useEffect(()=>{
  axios.post("http://localhost:5000/api/user/countusers").then((res)=>{
  setuser(res.data.count);
  })
  axios.post("http://localhost:5000/api/user/countOrders").then((res)=>{
  setAllorder(res.data.count);
  })
  axios.post("http://localhost:5000/api/user/getOrderData").then((res)=>{
  setRevenue(res.data);
  })
})

const totalRevenue = revenue.reduce((accumulator, product) => {
  return accumulator + product.amount;
}, 0);


  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-box">
          <h2>Total Users</h2>
        <p>{user}</p>
        </div>
        <div className="stat-box">
          <h2>Orders</h2>
          <p>{allorder}</p>
        </div>
        <div className="stat-box">
          <h2>Revenue</h2>
          <p>₹{totalRevenue}</p>
        </div>
      </div>
      {/* Additional content goes here */}
    </div>
  );
};

export default Dashboard_Admin;
