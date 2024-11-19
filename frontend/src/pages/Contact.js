
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import React from 'react';

const Contact = () => {
  return (
   <>
   
   <div className='Contact_Us'>
    <div className='title_b'>
      <h2>Get in Touch </h2>
    </div>
    <div className='box_b'>

      {/* <------form------------------ */}
      <div className='contact_b form_m'>
        <h3>Send a Message</h3>
        <form>
          <div className='form_Box'>
           <div className='row50'>
            <div className='input_Box'>
              <span>First Name </span>
              <input type='text' placeholder='first name'/>
            </div>
            <div className='input_Box'>
              <span>Last Name </span>
              <input type='text' placeholder='last name'/>
            </div>
           </div>

           <div className='row50'>
            <div className='input_Box'>
              <span>Email  </span>
              <input type='text' placeholder='enter email'/>
            </div>
            <div className='input_Box'>
              <span>Mobile No </span>
              <input type='text' placeholder='enter your number'/>
            </div>
           </div>
           <div className='row100'>
            <div className='input_Box'>
              <span> Message  </span>
            
              <textarea placeholder='Write your Message here...!!!'></textarea>
            </div>
            </div>

           <div className='row100'>
            <div className='input_Box'>
            
              <input type='submit' value="send"/>
            </div>
            </div>

          </div>
        </form>
      </div>

      {/* <---------info box -----------------> */}
      <div className='contact_b info'>
        
        <h3>Contact Info </h3>
        <div className='info_Box'>
           
          <div>
            <span><FaLocationDot /></span>
            <p>MP Nagar ,Bhopal <br/> INDIA </p>
          </div>

          <div>
            <span><MdEmail /></span>
            <a href='mailto:mobihub@gmail.com'>MobiHub@gmail.com</a>
          </div>

          <div>
            <span><IoIosCall /></span>
            <a href='tel:+918839093270'>+91 883 909 3270</a>
          </div>

          {/* social media link  */}

           <ul className="sci">
          <li><a href="#"><FaFacebookSquare /></a></li>
          <li><a href="#"><FaTwitterSquare /></a></li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
           </ul>
        </div>
      
      </div>

      {/* <-----------map----------------> */}
      <div className='contact_b map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.284749887305!2d77.43031987514713!3d23.232722979026985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435605f269e1%3A0xe67446598d15ad0e!2sCybrom%20Technology%20-%20Python%20%7C%20Java%20%7C%20MERN%20%7C%20C%20C%2B%2B%20%7C%20Data%20Science%20%7C%20Machine%20Learning%20%7C%20Ethical%20Hacking%20%7C%20Job%20oriented%20Training!5e0!3m2!1sen!2sin!4v1710087995651!5m2!1sen!2sin" />

      {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
      </div>

    </div>
   
   </div>

   </>
  )
}

export default Contact;

