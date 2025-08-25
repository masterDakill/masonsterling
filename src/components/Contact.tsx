import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">GET IN TOUCH</h2>
            <p className="contact-description">
              Ready to embark on a musical journey? Whether you're interested in 
              booking, collaborations, or just want to connect, we'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>booking@masonsterling.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>Management</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Based In</h4>
                  <p>Nashville, Tennessee</p>
                </div>
              </div>
            </div>
            
            <div className="social-media">
              <h4>Follow the Journey</h4>
              <div className="social-grid">
                <a href="#" className="social-item">
                  <span className="social-icon">🎵</span>
                  <span>Spotify</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-icon">🍎</span>
                  <span>Apple Music</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-icon">📺</span>
                  <span>YouTube</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-item">
                  <span className="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input form-select"
                >
                  <option value="">Select a Subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press & Media</option>
                  <option value="fan">Fan Message</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="form-input form-textarea"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;