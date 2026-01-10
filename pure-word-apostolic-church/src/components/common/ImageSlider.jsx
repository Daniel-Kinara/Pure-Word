import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544414814-0a1f7f3d9c0a?auto=format&fit=crop&w=1200&q=80",
      alt: "Church congregation worshiping together",
      title: "Sunday Worship Service",
      caption: "Join us every Sunday for inspiring worship and biblical teaching"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1501281667305-0d4ebf781e4a?auto=format&fit=crop&w=1200&q=80",
      alt: "Church community fellowship gathering",
      title: "Community Fellowship",
      caption: "Building meaningful relationships in Christ"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80",
      alt: "People studying Bible together",
      title: "Bible Study",
      caption: "Deep dive into God's word every Wednesday"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      alt: "Youth group activities and fellowship",
      title: "Youth Ministry",
      caption: "Empowering the next generation in faith"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      alt: "Children learning about Jesus",
      title: "Children's Ministry",
      caption: "Nurturing young hearts in God's love"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  // Handle image loading
  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      try {
        const promises = slides.map(slide => loadImage(slide.image));
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && !isLoading) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isLoading, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, nextSlide]);

  if (isLoading) {
    return (
      <div className="image-slider loading">
        <div className="loader"></div>
        <p>Loading images...</p>
      </div>
    );
  }

  return (
    <div className="image-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div 
              className="slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.alt}
            >
              {/* Gradient overlay for better text visibility */}
              <div className="slide-overlay"></div>
            </div>
            
            <div className="slide-content">
              <div className="slide-number">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-caption">{slide.caption}</p>
              <button 
                className="slide-action-btn"
                onClick={() => window.location.href = '/events'}
                aria-label={`Learn more about ${slide.title}`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button 
          className="slider-nav prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>
        <button 
          className="slider-nav next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>

        {/* Play/Pause button */}
        <button 
          className="play-pause-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>

        {/* Progress bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
              transition: isPlaying ? 'width 5s linear' : 'none'
            }}
          ></div>
        </div>

        {/* Slide indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="indicator-dot"></span>
            </button>
          ))}
        </div>

        {/* Thumbnail navigation */}
        <div className="thumbnail-navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`View slide ${index + 1}: ${slide.title}`}
            >
              <img 
                src={slide.image} 
                alt={`Thumbnail for ${slide.title}`}
                loading="lazy"
              />
              <div className="thumbnail-overlay">
                <span>{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="slide-counter">
        <span className="current">{currentSlide + 1}</span>
        <span className="separator">/</span>
        <span className="total">{slides.length}</span>
      </div>
    </div>
  );
};

export default ImageSlider;