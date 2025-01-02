import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {


    useEffect(() => {
        AOS.init({
          duration: 900,
          mirror: false,
          offset:10
        });
      }, []);
    return (
        <div id="sec-4">
            <div className="sec-left">
                <div className="heading">
                    <h3>Why Choose <span>Xagrotor Tek?</span></h3>
                </div>
                <div className="content1">
                    <div data-aos="fade-up" className="adv-card-bg-home" >
                        <span className="green-border1"></span>
                        <span className="green-border2"></span>
                        <span className="black_background"></span>
                        <span className="glass_effect"></span>
                        <div className="adv-card" >
                            <div className="adv-card-content">
                                <div className="image_background">
                                    <span id="img_bck"></span>
                                    <img src="/assets/choose1.webp" alt="Image" />
                                </div>
                            </div>
                            <div className="content-div">
                                <h4>Innovative Technology</h4>
                                <p>We specialize in cutting-edge agricultural drone solutions designed to enhance farming operations, boost productivity, and simplify complex tasks
                                    </p>
                            </div>
                        </div>
                    </div>
                    <hr className="left_hr" />
                    <div data-aos="fade-up" className="adv-card-bg-home">
                        <span className="green-border1"></span>
                        <span className="green-border2"></span>
                        <span className="black_background"></span>
                        <span className="glass_effect"></span>
                        <div className="adv-card">
                            <div className="adv-card-content">
                                <div className="image_background">
                                    <span id="img_bck"></span>
                                    <img src="/assets/choose2.webp" alt="Image" />
                                </div>
                            </div>
                            <div className="content-div">
                                <h4>Customer Support</h4>
                                <p>Our dedicated team provides unmatched customer support, helping you with setup, training, and troubleshooting for a seamless experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="middle_hr" />
            <div className="sec-right">
                <div className="content2">
                    <div data-aos='fade-up' className="adv-card-bg-home">
                        <span className="green-border1"></span>
                        <span className="green-border2"></span>
                        <span className="black_background"></span>
                        <span className="glass_effect"></span>
                        <div className="adv-card">
                            <div className="adv-card-content">
                                <div className="image_background">
                                    <span id="img_bck"></span>
                                    <img src="/assets/choose3.webp" alt="Image" />
                                </div>
                            </div>
                            <div className="content-div">
                                <h4>Expertise in Agriculture</h4>
                                <p>With a deep understanding of agriculture and technology, we ensure our drones and services are tailored to meet farmers unique challenges and goals</p>
                            </div>
                        </div>
                    </div>
                    <hr className="right_hr" />
                    <div data-aos='fade-up' className="adv-card-bg-home">
                        <span className="green-border1"></span>
                        <span className="green-border2"></span>
                        <span className="black_background"></span>
                        <span className="glass_effect"></span>
                        <div className="adv-card">
                            <div className="adv-card-content">
                                <div className="image_background">
                                    <span id="img_bck"></span>
                                    <img src="/assets/choose4.webp" alt="Image" />
                                </div>
                            </div>
                            <div className="content-div">
                                <h4>Cost-Effective Solutions</h4>
                                <p>Our solutions are designed to optimize resources, reduce operational costs, and deliver long-term savings without compromising on performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
