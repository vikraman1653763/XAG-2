import React from 'react';
import '/src/style/footer.css';
import facebook from '/assets/facebook.svg';
import youtube from '/assets/youtube.svg';
import twitter from '/assets/twitter.svg';
import instagram from '/assets/instagram.svg';
import linkedin from '/assets/linkedin.svg';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer_1">
                    <div className="part-1">
                        <div className="img-bg">
                            <img src="/assets/logo.webp" alt="Xagrotor Tek" />
                        </div>
                        <p>Xagrotor Tek Private Limited</p>
                    </div>
                    <div className="part-2">
                        <div className="part-22">
                            <h3>Quick Links</h3>
                        <ul className="list_links">
                                <li><a href="/about">About</a></li>
                                <li><a href="/training">Training</a></li>
                                <li><a href="/blog">Blogs</a></li>
                                <li><a href="/career">Career</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/dealer">Dealer</a></li>
                            </ul>
                        </div>
                        <div className="part-23">
                            <h3>Product</h3>
                            <ul>
                            <li><a href="/agr16">Agr16</a></li>
                        <li><a href="/agr16">Ag10</a></li>
                        <li><a href="/flight-controller">Xrotor&nbsp;Tek</a></li>
                        <li><a href="/Batteries">Batteries</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="part-4">
                        <h3>Map Location</h3>
                        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1435406187184!2d80.13592817484124!3d12.962665387351917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f00514a0223%3A0x9f0795664e64292b!2sXagrotortek%20new%20office!5e0!3m2!1sen!2sin!4v1732102794587!5m2!1sen!2sin"                            width="100%"
                            height="200"
                            style={{ border: 0, aspectRatio: '16/9' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>
                </div>
                <hr className="custom_hr" />
                <div className="footer_2">
                    <div className="left_content">
                        <p>&copy; 2023. All rights reserved.</p>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                        <a href="/admin">Admin</a>
                        <a href="/site-map">Site Map</a>
                    </div>
                    <div className="right_content">

                    <img src={facebook} alt='facebook'/>
                    <img src={instagram}  alt='instagram'/>
                    <img src={linkedin} alt='linkedin'/>
                    <img className='tw' src={twitter} alt='twitter'/>
                    <img className='yt' src={youtube} alt='youtube'/>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
