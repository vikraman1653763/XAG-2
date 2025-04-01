// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/notFound.css';
import {useRive, useStateMachineInput} from "rive-react";


const NotFound = () => {


  const SMname = "State Machine 1"
  const INname = "cursorOut"
  const {rive , RiveComponent} = useRive({
      src:'/assets/i404.riv',
      stateMachines: SMname,
      autoplay:true
  })
  const onclickInput = useStateMachineInput(rive ,  SMname , INname)


  return (
    <div className='not-container'>
    <div className='not1'>
      <h3>Page Not Found !</h3>
      <p>The page you are looking for does not exist. You may have misstyped the address or the page may have moved.</p>
      <div className='not2'>
        <RiveComponent 
       
        onClick={()=>onclickInput.fire()}
        />
    </div>
      <Link to="/">Go back to Home</Link>
     
    </div>
   
    </div>
  );
};

export default NotFound;
