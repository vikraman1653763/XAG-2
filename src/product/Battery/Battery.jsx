import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../../style/Battery.css';
import data from '../../Batteries.json';
import { Link } from 'react-router-dom';
import BatteryBanner from"./BatteryBanner";
import Section1 from "./Section1.jsx"
import Section2 from './Section2';
import './battery.css'
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Section6 from './Section6.jsx';
import Section7 from './Section7.jsx';
import Section8 from './Section8.jsx';
import Section9 from './Section9.jsx';
import Section10 from './Section10.jsx';
import Section11 from './Section11.jsx';
const Battery = () => {
    const [batteries, setBatteries] = useState([]);

    useEffect(() => {
        setBatteries(data.batteries);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            reset: false,
            duration: 500,
            easing: 'steps(1111)',
            distance: '10px',
            origin:"bottom",
            disable: 'mobile',
        });

        sr.reveal('.battery-card');
        return () => {
            sr.destroy();
        };
    }, [batteries]);

    return (
        <>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section11/>
        <BatteryBanner/>
        <div id="battery-container">
            {data.map((battery,index) => (
                <div className="battery-card" key={index}>
                    <div className="battery-image">
                        <img src={battery.image} alt="Product" />
                    </div> 
                    <div className="battery-info">
                        <h2 className="battery-title">{battery.name}</h2>
                        <p className="battery-model">{battery.Model}</p>
                        <div className='battery-card-footer'>
                            <div className="battery-price">₹{battery.price}</div>
                            <Link to={`/battery/${battery.ID}`} className="add-to-cart">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Battery;
