import React, { useState, useEffect } from 'react';
import { FiSearch, FiHeart } from 'react-icons/fi'; // Importing the menu icon
import { FaFilter } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../css/shop.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slice/ProductSlice';
import { addtoWishlist } from '../slice/WishlistSlice';
import { ToastContainer, toast } from 'react-toastify';

const Shop = () => {
  const [price, setPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar open/close
  const [products, setproducts] = useState([])
  const [wishlist, setWishlist] = useState([]);
  const mydispatch = useDispatch();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  // Function to handle search term change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlewishlist = (
    productName,
    productBrand,
    productPrice,
    productRAM,
    productROM,
    regularPrice,
    Image_URL,
    product_ID

  ) => {
    toast.success("product added in your wishlist", {
      autoClose: 1000
    })
    mydispatch(addtoWishlist({
      id: product_ID,
      Name: productName,
      Price: productPrice,
      Image_path: Image_URL,
      RAM: productRAM,
      ROM: productROM,
    }))
  }

  // Filtered products based on search term
  const filteredProducts = products.filter(product =>
    product.Product_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // get the item from database
  const mydata = async () => {

    const response = await axios.post("http://localhost:5000/api/user/DisplayProduct").then((res) => {

      // console.log(res.data, "hello")
      // setallproductsdisplay(res.data);
      setproducts(res.data);
    })

  }
  useEffect(() => {
    mydata()
  }, [])

  // add to cart

  const onAddToCart = (productName, productPrice, regularPrice, Image_URL, product_ID) => {
    toast.success("product added in your Add to cart")
    mydispatch(addtocart({
      id: product_ID,
      Name: productName, Price: productPrice, Image_path: Image_URL, quantity: 1
    }))
  }

  return (
    <>
      <div className='leftt'>
        <div className={`filter-container ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <FaFilter size="25" />
          </div>
          <div className="filter-content">
            <h2>Filter</h2>
            <div className="filter-section">
              <h3>Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={handlePriceChange}
                className="price-range"
              />
              <span className="price-value">${price}</span>
              <span className="price-value">$1000</span>
            </div>
            <div className="filter-section">
              <h3>Brands</h3>
              <select className="brand-select">
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
                <option value="brand3">Brand 3</option>
              </select>
            </div>
            <div className="filter-section">
              <h3>RAM</h3>
              <select className="ram-select">
                <option value="4gb">4GB</option>
                <option value="8gb">8GB</option>
                <option value="16gb">16GB</option>
                <option value="32gb">32GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='righttt'>

        <div className="search-section">
          <div className="search-container">
            <input
              type='text'
              placeholder="Search products..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <span className="search-icon">
              <FiSearch />
            </span>
          </div>
        </div>
        <br />
        <div className="product-cards">
          {filteredProducts.length === 0 ? (
            <p>No products available <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> </p>

          ) : (
            filteredProducts.map(product => (
              <div className="product-cardx" key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <img src={product.Image_URL[0]} alt={product.Product_Name} />
                </Link>
                <div className={`wishlist-icon ${wishlist.includes(product.id) ? 'clicked' : ''}`} onClick={() => handlewishlist(
                  product.Product_Brand,
                  product.Product_Name,
                  product.Product_Price,
                  product.Product_RAM,
                  product.Product_ROM,
                  product.Product_Regular_Price,
                  product.Image_URL,
                  product._id
                )}>
                  <FiHeart />
                </div>
                <h3>{product.Product_Name}</h3>
                <p>Price:₹{product.Product_Price} <span className='regular_price_item'>{product.Product_Regular_Price}</span></p>
                <div className="buttons">
                  <button className='buy_nowbutton' >Buy Now</button>
                  <button className='add_tobutton' onClick={() => onAddToCart(product.Product_Name, product.Product_Price, product.Product_Regular_Price, product.Image_URL, product._id)}>Add to Cart</button>
                  <ToastContainer />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
