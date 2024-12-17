import React from 'react';
import '../style/success.css';
import tick from "/assets/tick.webp"
import { IoArrowBackCircle } from "react-icons/io5";
function FormSuccess() {
  return (
    <div className="dealer-form-success">
      <img src={tick} className='success-tick'/>
      <div className='success-detail'>

      <h2 className='success-thank1'>Thank you for reaching out 😊</h2>
      <h2 className='success-thank2'>Your Form has been Submitted Successfully!</h2>
     
      <a className="dealer-back-button" href='/'> <IoArrowBackCircle/>Back</a>
      </div>
    </div>
  );
}

export default FormSuccess;
