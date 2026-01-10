import { FiHeart, FiEye } from 'react-icons/fi';
import './ImageGrid.css';

const ImageGrid = ({ images, onImageClick }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="image-grid">
      {images.map(image => (
        <div 
          key={image.id} 
          className="gallery-item"
          onClick={() => onImageClick(image)}
        >
          <div className="image-container">
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h4>{image.title}</h4>
                <p className="image-date">{formatDate(image.date)}</p>
                <div className="image-stats">
                  <span className="stat">
                    <FiHeart /> {image.likes}
                  </span>
                  <span className="stat">
                    <FiEye /> View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;