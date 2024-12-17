import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const Section8 = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          mirror: true,
        });
      }, []);
    return (
        <section id="sec-8">
            <div className="content_sec">
                <div className="left">
                    <h3>GET IN <span>TOUCH!</span></h3>
                    <p>Feel free to contact us! Whether you have questions about our products, need support, or want to learn more about our latest deals, our team is here to help.</p>
                   
                        <Link to='/contact' >
                        GET A QUOTE</Link>
                </div>
                <div className="right">
                    <img data-aos="fade-up" src="/assets/AGR16_TD_MB.webp" alt="drone" />
                </div>
            </div>
        </section>
    );
};

export default Section8;
