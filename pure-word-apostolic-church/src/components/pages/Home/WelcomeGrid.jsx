import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlayCircle } from 'react-icons/fi';
import { FaChurch, FaPrayingHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ImageSlider from '../../common/ImageSlider';
import './WelcomeGrid.css';

const WelcomeGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544414814-0a1f7f3d9c0a?auto=format&fit=crop&w=1200&q=80",
      title: "Worship With Us",
      description: "Join our vibrant worship services every Sunday"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501281667305-0d4ebf781e4a?auto=format&fit=crop&w=1200&q=80",
      title: "Community Fellowship",
      description: "Experience genuine Christian community"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80",
      title: "Biblical Teaching",
      description: "Grow through practical Bible-based teaching"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      title: "Youth Ministry",
      description: "Engaging programs for the next generation"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const serviceTimes = [
    { day: "Sunday", time: "9:00 AM", type: "Main Service" },
    { day: "Wednesday", time: "6:00 PM", type: "Bible Study" },
    { day: "Friday", time: "5:30 AM", type: "Prayer Meeting" },
    { day: "Saturday", time: "3:00 PM", type: "Youth Service" }
  ];

  return (
    <div className="welcome-grid">
      <div className="welcome-content">
        <div className="welcome-header">
          <div className="church-icon">
            <FaChurch />
          </div>
          <div className="church-info">
            <h1>Pure Word Apostolic Church</h1>
            <p className="location">
              <FaPrayingHands /> Ogembo Town, Kisii, Kenya
            </p>
          </div>
        </div>

        <div className="welcome-message">
          <h2>Welcome Home</h2>
          <p>
            We are a community of believers committed to worshiping God, 
            growing together in faith, and serving our neighbors in Ogembo 
            and beyond. Whether you're exploring faith or looking for a church home, 
            you're welcome here.
          </p>
        </div>

        <div className="service-times">
          <h3>Service Times</h3>
          <div className="times-grid">
            {serviceTimes.map((service, index) => (
              <div key={index} className="time-card">
                <div className="day">{service.day}</div>
                <div className="time">{service.time}</div>
                <div className="type">{service.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="welcome-actions">
          <Link to="/events" className="btn-primary">
            Join Our Next Service
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get Directions
          </Link>
        </div>
      </div>

      <div className="welcome-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="slider-nav prev" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="slider-nav next" onClick={nextSlide}>
            <FiChevronRight />
          </button>

          <div className="slider-controls">
            <button 
              className="play-pause"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <FiPlayCircle className={isPlaying ? 'playing' : ''} />
            </button>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="slider-caption">
          <p>Experience God's love and power in our community</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGrid;