import React, { useEffect, useState } from 'react';
import '../../style/Battery.css';
import ScrollReveal from 'scrollreveal';
import data from '../../Batteries.json';
import { Link } from 'react-router-dom';
function Section12() {
    const [batteries, setBatteries] = useState([]);

    useEffect(() => {
        setBatteries(data.batteries);
    }, []);

    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         reset: false,
    //         duration: 500,
    //         easing: 'steps(1111)',
    //         distance: '10px',
    //         origin:"bottom",
    //         disable: 'mobile',
    //     });

    //     sr.reveal('.battery-card');
    //     return () => {
    //         sr.destroy();
    //     };
    // }, [batteries]);
  return (
    <div>
      <div id="bat-12-container">
            {data.map((battery,index) => (
                <div className="bat-12-card" key={index}>
                    <div className="bat-12-image">
                        <img src={battery.image} alt="Product" />
                    </div> 
                    <div className="bat-12-info">
                        <h2 className="bat-12-title">{battery.Model}</h2>
                        {/* <p className="battery-model">{battery.Model}</p> */}
                        <div className='bat-12-card-footer'>
                            <div className="bat-12-price">₹{battery.price}</div>
                            <Link to={`/battery/${battery.ID}`} className="bat-12-add-to-cart">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Section12
