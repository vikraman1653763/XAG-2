import React from 'react';
import '../style/footer.css';
import { FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

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
                            <h3>Products</h3>
                            <ul>
                                <li><a href="/agr16">AGR16</a></li>
                                <li><a href="/agr10">AGR10</a></li>
                                <li><a href="/flight-controller">Xrotor Tek</a></li>
                                <li><a href="/batteries">Batteries</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="part-4">
                        <h3>Map Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.139513218653!2d80.13583747454645!3d12.962923215069504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f23de1a6ed1%3A0xaaf9d0d593909ba8!2sXAGROTOR%20TEK%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1734001574004!5m2!1sen!2sin"
                            width="100%"
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
                        <a href="/sitemap.xml">Site Map</a>
                    </div>
                    <div className="right_content">
                        <a href="https://www.facebook.com/share/1MupYvERC9/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://youtube.com/@xagrotortek?si=AditypPNMBzHL7rT" target="_blank" rel="noopener noreferrer">
                            <FaYoutubeSquare />
                        </a>
                        <a href="https://www.instagram.com/xagrotortek?igsh=d3puNXl6Y3hmYWpx" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare />
                        </a>
                        {/* <a href="https://x.com/xagrotortek" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare />
                        </a> */}
                        <a href="https://www.linkedin.com/company/xagrotor-tek-private-limited/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
