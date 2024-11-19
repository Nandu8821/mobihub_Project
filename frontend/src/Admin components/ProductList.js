import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../css/AdminComponentCss/ProductList.css"
import EditProduct from './EditProduct';
import { toast } from 'react-toastify';
const ProductList = () => {
  var itemcount = 0;
  const [allproductsdisplay, setallproductsdisplay] = useState([])

  const navigate = useNavigate();
  const mydata = async () => {

    await axios.post("http://localhost:5000/api/user/DisplayProduct").then((res) => {

      // console.log(res.data, "hello")
      setallproductsdisplay(res.data);
      // console.log(allproductsdisplay);
      console.log("displayed")

    })
  }
  useEffect(() => {
    mydata()
  }, [])


  // item delete 

  const handleDelete = async (productId) => {
    try {
      // Make an API call to delete the product

      axios.delete(`http://localhost:5000/api/user/DeleteProduct/${productId}`).then(() => {

        toast.success("Product deleted successfully")

        mydata();
      });

      console.log("Product deleted successfully");

      toast.success("Product deleted successfully");
      // Assuming mydata() is an asynchronous function, you can await it as well
      mydata();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Edit item 
  const handleEdit = async (Image_URL, Product_Name, Product_Price, Product_Regular_Price, Product_Brand, Product_RAM, Product_ROM) => {
    // console.log(`
    // ${Image_URL} \n
    //  ${Product_Name} \n 
    //  ${Product_Brand} \n 
    //  ${Product_Price} \n 
    //  ${Product_Regular_Price} \n 
    //  ${Product_ROM} \n 
    //  ${Product_RAM} \n 
    //  `)

    <EditProduct
      Product_Name={Product_Name}
      Product_Brand={Product_Brand}
      Product_Price={Product_Price}
    />
    // await <EditProduct 
    //  Image_URL={Image_URL}
    //  Product_Name={Product_Name}  
    //  Product_Brand={Product_Brand} 
    // Product_Price={Product_Price}
    //  Product_Regular_Price={Product_Regular_Price} 
    //  Product_ROM={Product_ROM} 
    //  Product_RAM={Product_RAM}
    //   />
    navigate("/admin_layout/EditProduct")
  }


  // all item 

  const allitem = allproductsdisplay.map((product) => {
    itemcount++;
    return (
      <>
        <tr key={product._id}>
          <td>{itemcount}</td>
          <td><img src={product.Image_URL[0]} alt={product.name} className="product-image1" /></td>
          <td>{product.Product_Name}</td>
          <td>{product.Product_Price}</td>
          <td>
            <button className="edit-btn1" onClick={() => handleEdit(
              product.Image_URL,
              product.Product_Name,
              product.Product_Price,
              product.Product_Regular_Price,
              product.Product_Brand,
              product.Product_RAM,
              product.Product_ROM
            )}>Edit</button>
            <button className="delete-btn1" onClick={() => handleDelete(product._id)}>Delete</button>
          </td>
        </tr>
      </>
    )
  })


  return (
    <div className="product-list-container1">
      <h1>Product List</h1>
      <table className="product-table1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allitem}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
