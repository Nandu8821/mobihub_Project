import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import "../../../css/MoreItem.css";

const MoreItem = ({ imageUrl, title, description }) => {
  return (
    <Link to="/product"> {/* Add the Link tag here with the desired product route */}
      <div className="containerr">
        <div className="image-container">
          <img src={imageUrl} alt="." />
        </div>
        <div className="text-overlay">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

const MoreItemsList = () => {
  const items = [
    {
      imageUrl: "https://i03.appmifile.com/865_operator_in/15/02/2024/d625a465c21b489538c6a16d3b035efd.jpg?thumb=1&w=1680&f=webp&q=85",
      title: "Smart Deals!",
      description: "Unlock Unbeatable Value"
    },
    {
      imageUrl: "https://i03.appmifile.com/708_operator_in/02/03/2024/fa244ac0ee224e450b94a4983c6a8e73.jpg?thumb=1&w=1680&f=webp&q=85",
      title: "Title 2",
      description: "Description 2"
    },
    {
      imageUrl: "https://i03.appmifile.com/724_operator_in/20/02/2024/48aeec7bf6e03588186e5251f6f086c2.jpg?thumb=1&w=1680&f=webp&q=85",
      title: "Shop Smart, Save Big",
      description: "Exclusive Discounts Waiting for You!"
    },
    {
      imageUrl: "https://i03.appmifile.com/761_operator_in/12/01/2024/899ad29d30600493f230bcbf2ec81c98.jpg?thumb=1&w=1680&f=webp&q=85",
    },
    // Add more items as needed
  ];

  return (
    <div>
      {items.map((item, index) => (
        <MoreItem
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default MoreItemsList;
