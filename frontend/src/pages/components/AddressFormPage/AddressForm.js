import React, { useState } from "react";
import "../../../css/AddressForm.css";
import { setAddressDetail } from "../../../slice/OrderDetail"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddressForm = () => {
  const mydispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    townCity: "",
    state: "",
    isDefault: false
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Form data is available in formData object
    // console.log(formData);
    // console.log(formData)

    await mydispatch(setAddressDetail(formData));

    // Logic to submit the form data

    // Redirect to the buynow page after form submission
    navigate('/buynow');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="address-form">
      <h2>Add a New Address</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="address-form-group-country">
          <label htmlFor="country">Country:</label>
          <select id="country" disabled>
            <option value="india">India</option>
          </select>
        </div>
        <div className="address-form-group-fullname">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-mobile">
          <label htmlFor="mobile-number">Mobile Number:</label>
          <input
            type="number"
            id="mobile-number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-pincode">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            min="0"
            max="999999"
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-address1">
          <label htmlFor="address-line1">
            Flat, House No, Building, Company, Apartment:
          </label>
          <input
            type="text"
            id="address-line1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-address2">
          <label htmlFor="address-line2">Area, Street, Sector, Village:</label>
          <input
            type="text"
            id="address-line2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-landmark">
          <label htmlFor="landmark">Landmark:</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            required />
        </div>
        <div className="address-form-group-towncity">
          <div className="address-form-town-city">
            <label htmlFor="town-city">Town/City:</label>
            <input
              type="text"
              id="town-city"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              required />
          </div>
          <div className="address-form-state">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Goa">Goa</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              {/* Include options for states */}
            </select>
          </div>
        </div>
        <div className="address-form-group-default">
          <label>
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              required />
            Make this my default address
          </label>
        </div>
        <button type="submit">Submit Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
