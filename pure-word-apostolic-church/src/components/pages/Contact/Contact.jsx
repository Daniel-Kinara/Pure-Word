import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Our Location',
      details: [
        'Pure Word Apostolic Church',
        'Ogembo Town, Kisii County',
        'Kenya, East Africa'
      ]
    },
    {
      icon: <FiPhone />,
      title: 'Contact Numbers',
      details: [
        'Main Office: +254 712 345 678',
        'Pastor: +254 723 456 789',
        'Emergency: +254 700 000 000'
      ]
    },
    {
      icon: <FiMail />,
      title: 'Email Addresses',
      details: [
        'General: info@purewordchurch.org',
        'Pastor: pastor@purewordchurch.org',
        'Support: support@purewordchurch.org'
      ]
    },
    {
      icon: <FiClock />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Office closed (Service Day)'
      ]
    }
  ];

  const serviceTimes = [
    { day: 'Sunday', time: '9:00 AM - 12:00 PM', service: 'Main Worship Service' },
    { day: 'Tuesday', time: '5:30 AM', service: 'Morning Prayer' },
    { day: 'Wednesday', time: '6:00 PM - 8:00 PM', service: 'Bible Study' },
    { day: 'Friday', time: '5:30 AM', service: 'Morning Prayer' },
    { day: 'Saturday', time: '3:00 PM - 5:00 PM', service: 'Youth Service' }
  ];

  const socialMedia = [
    { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com/purewordchurch', color: '#1877F2' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/purewordchurch', color: '#1DA1F2' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com/purewordchurch', color: '#E4405F' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', url: 'https://wa.me/254712345678', color: '#25D366' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p className="subtitle">We'd love to hear from you. Get in touch with us.</p>
        </div>
      </div>

      <div className="contact-intro">
        <h2>Visit Our Church</h2>
        <p>
          Whether you're looking for a church home, need prayer, want to get involved, 
          or just have questions, we're here for you. Our doors and hearts are open.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <div className="form-header">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <FiCheckCircle className="success-icon" />
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button 
                className="btn-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="membership">Membership Information</option>
                    <option value="ministry">Ministry Involvement</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows="5"
                  required
                />
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="contact-info-section">
          <div className="info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h4>{info.title}</h4>
                <div className="info-details">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="service-times-section">
            <h4>Service Times</h4>
            <div className="service-times">
              {serviceTimes.map((service, index) => (
                <div key={index} className="service-time">
                  <div className="service-day">{service.day}</div>
                  <div className="service-details">
                    <div className="service-hour">{service.time}</div>
                    <div className="service-name">{service.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-media-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ backgroundColor: social.color }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="map-section">
            <h4>Find Us on Map</h4>
            <div className="map-container">
              <div className="map-placeholder">
                <FiMapPin className="map-icon" />
                <p>Ogembo Town, Kisii County, Kenya</p>
                <a 
                  href="https://maps.google.com/?q=Ogembo+Town+Kisii+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <h3>Visit Us This Sunday</h3>
        <p>Experience the warmth of our community and the power of God's word.</p>
        <div className="cta-actions">
          <a href="#directions" className="btn-primary">Get Directions</a>
          <a href="#virtual-tour" className="btn-secondary">Take Virtual Tour</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;