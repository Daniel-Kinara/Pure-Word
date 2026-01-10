import { useState, useEffect } from 'react';
import { FiImage, FiFilter, FiDownload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import GalleryFilter from './GalleryFilter';
import ImageGrid from './ImageGrid';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImage, setCurrentImage] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const categories = [
    { id: 'all', label: 'All Photos', count: 48 },
    { id: 'worship', label: 'Worship Services', count: 12 },
    { id: 'events', label: 'Special Events', count: 8 },
    { id: 'youth', label: 'Youth Ministry', count: 10 },
    { id: 'children', label: "Children's Church", count: 6 },
    { id: 'outreach', label: 'Community Outreach', count: 7 },
    { id: 'leadership', label: 'Leadership', count: 5 }
  ];

  useEffect(() => {
    // Mock data - in production, this would come from an API
    const mockImages = [];
    const imageCategories = ['worship', 'events', 'youth', 'children', 'outreach', 'leadership'];
    
    imageCategories.forEach(category => {
      for (let i = 1; i <= 8; i++) {
        mockImages.push({
          id: `${category}-${i}`,
          src: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=800&q=80`,
          alt: `${category} image ${i}`,
          category: category,
          title: `${category.charAt(0).toUpperCase() + category.slice(1)} Event ${i}`,
          date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
          likes: Math.floor(Math.random() * 100)
        });
      }
    });
    
    setGalleryImages(mockImages);
  }, []);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setCurrentImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showLightbox) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, currentImage]);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Church Gallery</h1>
          <p className="subtitle">Capturing moments of faith, fellowship, and worship</p>
        </div>
      </div>

      <div className="gallery-intro">
        <div className="intro-content">
          <div className="intro-icon">
            <FiImage />
          </div>
          <h2>Visual Journey of Our Church Family</h2>
          <p>
            Browse through photos from our worship services, ministry activities, 
            community events, and special celebrations. Each picture tells a story 
            of God's faithfulness in our midst.
          </p>
        </div>
        <div className="gallery-stats">
          <div className="stat">
            <div className="stat-number">{galleryImages.length}</div>
            <div className="stat-label">Total Photos</div>
          </div>
          <div className="stat">
            <div className="stat-number">{categories.length}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat">
            <div className="stat-number">2020</div>
            <div className="stat-label">Since</div>
          </div>
        </div>
      </div>

      <GalleryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ImageGrid 
        images={filteredImages}
        onImageClick={openLightbox}
      />

      <div className="gallery-cta">
        <h3>Share Your Photos</h3>
        <p>Are you a member with great photos from church events? Share them with us!</p>
        <button className="btn-primary">
          <FiImage /> Submit Photos
        </button>
      </div>

      {showLightbox && currentImage && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <FiChevronLeft />
            </button>
            <div className="lightbox-image-container">
              <img src={currentImage.src} alt={currentImage.alt} className="lightbox-image" />
              <div className="lightbox-info">
                <h3>{currentImage.title}</h3>
                <p className="lightbox-category">{categories.find(c => c.id === currentImage.category)?.label}</p>
                <p className="lightbox-date">
                  {currentImage.date.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <FiChevronRight />
            </button>
            <div className="lightbox-actions">
              <button className="lightbox-action-btn">
                <FiDownload /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;