const OrderModel = require("../models/Admin/Orderdetail");

const CreateOrder = async (req, res) => {
  
  try {
    const order = new OrderModel({
      fullName:        req.body.Address.fullName,
      mobileNumber:    req.body.Address.mobileNumber,
      pincode:         req.body.Address.pincode,
      address:         req.body.Address.addressLine1,
      amount:          req.body.Amount,
      email:           req.body.Email,
      orderID:         req.body.OrderID,
      productName:     req.body.ProductName
    });

    // Save the order to the database
    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//// get all order data 

const GetOrderData= async(req,res)=>{
  try {
    const order = await OrderModel.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// update the order status

const OrderStatuschange = async (req, res) => {
  
  try {
    // Ensure the request body contains the necessary fields
    const { id, update_OrderStatus } = req.body;
    
    if (!id || !update_OrderStatus) {
      return res.status(400).json({ error: "Missing required fields: id or update_OrderStatus" });
    }

    // Find the order by ID and update its status
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      id,
      { $set: { OrderStatus: update_OrderStatus } },
      { new: true } // Option to return the updated document
    );

    // Check if the order was found and updated
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Respond with the updated order
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// count our website orders 

const CountOrders=async(req, res) => {
  try {
    const count = await OrderModel.countDocuments({});
    res.json({ count: count });
  
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {GetOrderData, CreateOrder,OrderStatuschange ,CountOrders};
