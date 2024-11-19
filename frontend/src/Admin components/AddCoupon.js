import { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { isEditableInput } from "@testing-library/user-event/dist/utils";
import { toast } from "react-toastify";

const AddCoupon = () => {

  const [input, setInput] = useState({
    Coupon_Name: "",
    Created_Date: '',
    Discount: "",
    Expiry_Date: ""
  });

  const [allCoupon, setAllCoupon] = useState([])

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // const createcoupon = async () => {

  //   const time = new Date();
  //   let year = time.getFullYear();
  //   let month = time.getMonth();
  //   let day = time.getDate();
  //   let total = `${year}-${month + 1}-${day}`;

  //   await setInput((values) => ({ ...values, ['Created_Date']: total }))
  //   console.log(total)
  //   console.log(input)
  //   // try {
  //   //   axios.post("http://localhost:5000/api/user/AddCoupon", input).then(() => {
  //   //     alert("Coupon successfully added");
  //   //     // toast.success("Coupon Successfully Added!")
  //   //     Mycoupon();
  //   //   });

  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // }

  const createcoupon = async () => {
    // const time = new Date();
    // let year = time.getFullYear();
    // let month = time.getMonth();
    // let day = time.getDate();
    // let total = `${year}-${month + 1}-${day}`;

    // await setInput((values) => ({ ...values, ['Created_Date']: total }));
    console.log(input); // Log the state after the update is completed

    try {
      await axios.post("http://localhost:5000/api/user/AddCoupon", input);
      toast.success("Coupon Successfully Added!");
      Mycoupon();
      setInput({
        Coupon_Name: "",
        Created_Date: '',
        Discount: "",
        Expiry_Date: ""
      })
    } catch (err) {
      console.log(err);
    }
  };



  // Our All Coupons

  const Mycoupon = async () => {
    await axios.post("http://localhost:5000/api/user/DisplayCoupons").then((res) => {
      setAllCoupon(res.data)
      // console.log(res.data)
    })
  }
  useEffect(() => {
    Mycoupon()
  }, [])

  let sno = 0;
  const ourallcoupons = allCoupon.map((item) => {
    sno++;
    return (
      <>
        <div className="sub_tital">
          <p>{sno}</p>
          <p>{item.Coupon_Name}</p>
          <p>{item.Discount}OFF</p>
          <p>{item.Created_Date}</p>
          <p>{item.Expiry_Date}</p>

          {/* <div className="del_img">
            <img src="./Admin_images/delete.png" alt="" />
          </div> */}
          <MdDeleteForever onClick={() => handleDelete(item._id)} className="del_img" style={{ cursor: "pointer" }} />

        </div>
      </>
    )
  })

  // delete brand
  const handleDelete = async (couponid) => {
    try {
      // Make an API call to delete the product

      axios.delete(`http://localhost:5000/api/user/DeleteCoupon/${couponid}`);
      toast.success("Coupon deleted successfully");

      Mycoupon();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  return (
    <>

      <div className="First_box_sec1">

        <h1 className="heading">All Coupon </h1>

        <div className="tital">
          <h4>s/n</h4>
          <h4>Name</h4>
          <h4>Discount(0%)</h4>
          <h4>Date Created</h4>
          <h4>Expiry Date</h4>
          <h4>Action</h4>
        </div>
        <hr />
        {ourallcoupons}

        <div className="input_box">
          <h3 className="Heading1">Creat Coupon</h3>
          <p>Use the tarm to Create a Coupon</p>
        </div>
        <div className="inside_box">
          <p >Coupon Name</p>
          <input type="text" placeholder=" Enter Coupon Name" name="Coupon_Name" value={input.Coupon_Name} onChange={inputHandle} />
          <p >Discount %</p>
          <input type="text" placeholder=" Enter Discount %"
            name="Discount" value={input.Discount} onChange={inputHandle} />
          <p >Expiry date</p>
          <input type="date" placeholder=" 01/01/2024"
            name="Expiry_Date" value={input.Expiry_Date} onChange={inputHandle} />
          <div className="btn">
            <button onClick={createcoupon}>Save Coupon </button>

          </div>

        </div>

      </div>
    </>
  );
}


export default AddCoupon;