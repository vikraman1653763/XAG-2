import React from 'react'
import check from '/assets/check.svg';
function Section3() {
  return (
    <div className='agr16-sec-3'>
      <section className='agr16-sec-3-container' >
      <div className='agr16-sec-3-details'>
      <h3>AGR <span>16</span></h3>
        <p>The AGR-16 Agricultural Drone is a high-performance UAV designed specifically for agricultural applications, offering advanced capabilities to meet modern farming needs</p>
        <ul>
        <li><img src={check}/>Suitable for both spreader and sprayer</li>
        <li><img src={check}/>Supports up to 16 liters for liquid applications</li>
        <li><img src={check}/>Handles up to 16 kg of granular materials</li>
        </ul>
      </div>
      <div className='agr16-sec-3-image-container'>
        <img src='/assets/agr16TopDown.webp'/>
      </div>
      </section>
    </div>
  )
}

export default Section3
