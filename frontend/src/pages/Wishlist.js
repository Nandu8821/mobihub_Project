import { useSelector, useDispatch } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { delitem } from "../slice/WishlistSlice";
import { addtocart } from "../slice/ProductSlice";
import "../css/Wishlist.css";

const Wishlist = () => {
  const mywishlist = useSelector((state) => state.WishlistSlice.wishlist);
  const myydispatch = useDispatch();

  const Deleteitem = (id) => {
    myydispatch(delitem(id));
  };

  const onAddToCart = (productName, productPrice, regularPrice, Image_URL, product_ID) => {
    myydispatch(addtocart({
      id: product_ID,
      Name: productName,
      Price: productPrice,
      Image_path: Image_URL,
      quantity: 1,
    }));
  };

  const mywishlistdata = mywishlist.map((item) => (
    <div key={item.id} className="list_of_products_wishlist">
      <div className="product_img">
        <img src={item.Image_path[0]} alt="mobileimage" />
      </div>
      <div className="product_info">
        <h2>{item.Name} 5G ({item.RAM} RAM , {item.ROM} ROM)</h2>
        <h2>(black Engine)</h2>
        <h3>Rs.{item.Price}</h3>
        <button className="productButton" onClick={() => onAddToCart(item.Name, item.Price, item.regularPrice, item.Image_path[0], item.id)}>Add to Cart</button>
      </div>
      <div className="remove_to_wishlist">
        <Link onClick={() => Deleteitem(item.id)}>
          <FontAwesomeIcon style={{ fontSize: "24px", color: "black" }} icon={faTrash} />
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="wishlistpage_main_div">
      <div className="wishlist_header">
        <div className="header_left">Product</div>
        <div className="header_right">Delete</div>
      </div>
      <hr />
      <div className="all_items">{mywishlistdata}</div>
    </div>
  );
};

export default Wishlist;
