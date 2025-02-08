import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import '../../style/productform.css';
import { serverUrl } from '../../constant';

const ProductForm = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, mirror: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enquiryData = { companyName, email, phoneNumber, message };

    try {
      const response = await fetch(`${serverUrl}/api/enquiry`, {
        method: 'POST',
        body: JSON.stringify(enquiryData),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || 'Something went wrong!');
      } else {
        setError(null);
        navigate('/success');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="product-form">
      {/* Left Side - Promotional Section */}
      <aside className="product-form-left">
        <div className="product-form-heading">
          <h1>Contact us </h1>
          <h6>Kindly submit your details and share your message with us. Thank you!</h6>
        </div>
      </aside>

      {/* Right Side - Contact Form */}
      <div className="product-form-right">
        <form onSubmit={handleSubmit} style={{ cursor: isSubmitting ? 'wait' : 'auto' }}>
          <div className="p-f-company">
            <label htmlFor="companyname">Name</label>
            <input
              type="text"
              name="companyname"
              id="companyname"
              value={companyName}
              disabled={isSubmitting}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className="p-f-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="p-f-phone">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              value={phoneNumber}
              disabled={isSubmitting}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="p-f-message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              value={message}
              disabled={isSubmitting}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button  className='p-f-button' type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </section>
  );
};
export default ProductForm;
