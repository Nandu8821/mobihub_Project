import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "../css/Registration.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Registration = () => {

    const [HandleInpt, SetHandelInpt] = useState({});
    const navigate = useNavigate();

    const HandleAllInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        SetHandelInpt((values) => ({ ...values, [name]: value }));
    }


    const Registrationbutton = async () => {
        //console.log(HandleInpt);
        try {

            const response = await axios.post("http://localhost:5000/api/user/register", HandleInpt);

            if ("already exist" === response.data) {
                alert("User already registered!!");
                navigate("/loginpage");
            } else {
                console.log("Registration successful");
                navigate("/loginpage");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register user. Please try again later.");
        }

    }


    return (
        <>
            <form>
                <div className='forgap'>
                    <div className="container">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="abc" />
                        </div>
                        <div className="form">
                            <h2>Registration Form</h2>
                            <div className="input-group">
                                <input type="text" id="name" placeholder="Name" required
                                    name="Name" value={HandleInpt.Name} onChange={HandleAllInput} />
                                <input type="text" id="lastname" placeholder="Last Name" required
                                    name="LastName" value={HandleInpt.LastName} onChange={HandleAllInput} />
                            </div>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="Email" required
                                    name="Email" value={HandleInpt.Email} onChange={HandleAllInput} />
                                <input type="password" id="password" placeholder="Password" required
                                    name="Password" value={HandleInpt.Password} onChange={HandleAllInput} />
                            </div>
                            <div className="input-group">
                                <input type="text" id="address" placeholder="Address" required
                                    name="Address" value={HandleInpt.Address} onChange={HandleAllInput} />
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" id="keepLoggedIn" />
                                <label htmlFor="keepLoggedIn">Keep me logged in</label>
                            </div>
                            <button className='btnn' type="button" onClick={Registrationbutton} >Register Now</button>
                            <ToastContainer />
                            <div className="already-customer">
                                <p>Already a customer? <Link to="/loginpage">Please Login in</Link> <FaArrowRight /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Registration;
