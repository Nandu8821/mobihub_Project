import { useState } from "react";
import "../css/paymentpage.css";
import Phonepe from "./PaymentComponents/Phonepe";
import COD from "./PaymentComponents/COD";
import Upi from "./PaymentComponents/Upi";
import CreditCard from "./PaymentComponents/CreditCard";
import { useSelector } from "react-redux";

const Paymentpage = () => {
  let phonepeauth = false;
  let CODauth = false;
  let Creditcardauth = false;
  let Upiauth = false;
  const payamount = useSelector((state) => state.OrderdetailSlice.orderdetail);

  var mymethod = "";
  const [payment, setPayment] = useState("");

  const makepayment = (e) => {
    // alert(e.target.value)
    let ll = e.target.value;
    setPayment(ll);
  };

  switch (payment) {
    case "card":
      mymethod = <CreditCard />;
      Creditcardauth = true;
      Upiauth = false;
      phonepeauth = false;
      CODauth = false;
      break;
    case "upi":
      mymethod = <Upi />;
      Upiauth = true;
      Creditcardauth = false;
      phonepeauth = false;
      CODauth = false;
      break;
    case "phonepe":
      mymethod = <Phonepe />;
      phonepeauth = true;
      Upiauth = false;
      Creditcardauth = false;
      CODauth = false;
      break;
    case "COD":
      mymethod = <COD />;
      CODauth = true;
      phonepeauth = false;
      Upiauth = false;
      Creditcardauth = false;
      break;
    // default:
    //   alert("invailid input");
  }

  return (
    <>
      <div className="heading-payment">
        <h1>Payment</h1>
      </div>
      <br />
      <hr />
      <div className="payment-options-price-details">
        <div className="payment-options">
          <div className="payment-options-heading">
            {" "}
            <h1>Payment Option</h1>{" "}
          </div>
          <label for="Phonepay">
            <div>
              <div className="phonepay-option">
                <input
                  type="radio"
                  name="payment"
                  value="phonepe"
                  onClick={makepayment}
                  id="Phonepay"
                />
                <img
                  src="https://cdn.icon-icons.com/icons2/3914/PNG/512/phonepe_logo_icon_248865.png"
                  alt="phonepe img"
                />
                <span>Phonepe UPI 88XXXXXX270@ybl</span>
                {/* <button>Continue</button> */}
              </div>
              {phonepeauth ? mymethod : ``}
            </div>
          </label>

          <hr />
          <div>
            <label for="googlepay">
              <div className="googlepay-option">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  onClick={makepayment}
                  id="googlepay"
                />
                <img src="./images/googlepay.png" alt="google pay img" />
                <span>UPI</span>
              </div>
              {Upiauth ? mymethod : ``}
            </label>
          </div>
          <hr />
          <div>
            <label for="creditcart">
              <div className="credit-debit-atm">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onClick={makepayment}
                  id="creditcart"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png"
                  alt="rupay img"
                />
                <div>
                  <span>Credit / Debit / ATM Card</span>
                  <div className="rbi-guidelines">
                    Add and secure cards as per RBI guidelines
                  </div>
                </div>
              </div>
              {Creditcardauth ? mymethod : ``}
            </label>
          </div>
          <hr />
          <label>
          <div>
            <div className="cash-on">
              <input
                type="radio"
                name="payment"
                value="COD"
                onClick={makepayment}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTeJLezabwvrA3m3yavfnGVy94-OWlKX4uA&usqp=CAU"
                alt="cash on delivery img"
              />
              <span>Cash on Delivery</span>
            </div>
            {CODauth ? mymethod : ``}
          </div>
          </label>

          <hr />
        </div>

        {/* part 2 */}

        <div className="prices-details-category">
          <div className="prices-details-category-div">
            <h1 className="price-details">PRICE DETAILS</h1>
            <br />
            <div className="all-payment-detail">
              <div className="main-product-price">
                Price
                <span> ₹{payamount.Amount}</span>
              </div>

              <hr />

              <div className="delivery-charges">
                Delivery Charges
                <span> Free</span>
              </div>
              <hr />
              <div className="packaging-charges">
                Packaging charges
                <h4>₹60</h4>
              </div>
              <hr />

              <div className="amount-payable">
                <h3>Amount Payable</h3>
                <h4>₹{payamount.Amount+60}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paymentpage;
