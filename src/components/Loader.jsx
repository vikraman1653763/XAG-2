import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import '../style/Loader.css';

const Loader = () => (
  <div className="loader-container">
   <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#9BF00B"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    <p>Loading...</p>
  </div>
);

export default Loader;
