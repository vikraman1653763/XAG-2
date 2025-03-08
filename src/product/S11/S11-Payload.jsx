import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";


  
  
  
  const Payload=({data})=> {
      return (
        <div className="s11-payload-container">
        {data.map((item, index) => (
          <div key={index} className="s11-payload-card">
              <FaStar className="s11-payload-icon" />
              <BsBarChartFill className="s11-payload-chart-1"/>
              <BsBarChartFill className="s11-payload-chart-2"/>
            <div className="s11-payload-header">
              <h3 className="s11-payload-title">{item.title}</h3>
            <p className="s11-payload-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Payload;