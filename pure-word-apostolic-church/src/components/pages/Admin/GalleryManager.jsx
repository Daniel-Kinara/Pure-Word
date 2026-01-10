import { useState, useEffect } from 'react';
import { FiImage, FiUpload, FiTrash2, FiEdit2, FiSave, FiX, FiPlus, FiEye } from 'react-icons/fi';
import { useGallery } from '../../../context/GalleryContext';
import './GalleryManager.css';

const GalleryManager = () => {
  const { galleryImages, addImage, updateImage, deleteImage } = useGallery();
  const [isUploading, setIsUploading] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'worship',
    description: '',
    alt: ''
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'worship', label: 'Worship Services' },
    { value: 'events', label: 'Special Events' },
    { value: 'youth', label: 'Youth Ministry' },
    { value: 'children', label: "Children's Church" },
    { value: 'outreach', label: 'Community Outreach' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'others', label: 'Others' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!previewImage && !editingImage) {
      alert('Please select an image to upload');
      return;
    }

    const imageData = {
      ...formData,
      src: previewImage || editingImage?.src,
      date: new Date(),
      likes: 0
    };

    if (editingImage) {
      updateImage(editingImage.id, { ...imageData, id: editingImage.id });
    } else {
      addImage(imageData);
    }

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: 'worship',
      description: '',
      alt: ''
    });
    setPreviewImage(null);
    setEditingImage(null);
    setIsUploading(false);
  };

  const handleEdit = (image) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      category: image.category,
      description: image.description || '',
      alt: image.alt
    });
    setPreviewImage(image.src);
    setIsUploading(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      deleteImage(id);
    }
  };

  const categoryCounts = categories.reduce((acc, category) => {
    acc[category.value] = galleryImages.filter(img => img.category === category.value).length;
    return acc;
  }, { all: galleryImages.length });

  return (
    <div className="gallery-manager">
      <div className="manager-header">
        <h2><FiImage /> Gallery Management</h2>
        <button 
          className={`btn-primary ${isUploading ? 'hidden' : ''}`}
          onClick={() => setIsUploading(true)}
        >
          <FiUpload /> Upload Image
        </button>
      </div>

      <div className="manager-content">
        {(isUploading || editingImage) && (
          <div className="upload-form-section">
            <div className="form-header">
              <h3>{editingImage ? 'Edit Image' : 'Upload New Image'}</h3>
              <button className="btn-text" onClick={handleReset}>
                <FiX /> Cancel
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="upload-form">
              <div className="upload-preview">
                {previewImage ? (
                  <div className="preview-container">
                    <img src={previewImage} alt="Preview" className="preview-image" />
                    <div className="preview-actions">
                      <label className="btn-secondary">
                        <FiPlus /> Change Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="upload-area">
                    <FiImage className="upload-icon" />
                    <p>Click to select an image</p>
                    <label className="btn-secondary">
                      <FiUpload /> Select Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        required={!editingImage}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label>Image Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter image title"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Alt Text *</label>
                  <input
                    type="text"
                    name="alt"
                    value={formData.alt}
                    onChange={handleInputChange}
                    placeholder="Describe the image for accessibility"
                    required
                  />
                  <small>Important for SEO and accessibility</small>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Optional description of the image"
                    rows="3"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={handleReset}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    <FiSave /> {editingImage ? 'Update Image' : 'Upload Image'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <div className="gallery-controls">
          <div className="category-filters">
            <h4>Filter by Category</h4>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All ({categoryCounts.all})
              </button>
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label} ({categoryCounts[category.value] || 0})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gallery-images-section">
          <div className="section-header">
            <h3>Gallery Images ({filteredImages.length})</h3>
            <div className="gallery-stats">
              <span className="stat">{galleryImages.length} Total Images</span>
              <span className="stat">{categories.length} Categories</span>
            </div>
          </div>

          {filteredImages.length === 0 ? (
            <div className="empty-state">
              <FiImage className="empty-icon" />
              <h4>No Images Found</h4>
              <p>No images in this category. Upload some images or select a different category.</p>
            </div>
          ) : (
            <div className="images-grid">
              {filteredImages.map(image => (
                <div key={image.id} className="image-card">
                  <div className="image-container">
                    <img src={image.src} alt={image.alt} />
                    <div className="image-overlay">
                      <button 
                        className="overlay-btn view"
                        onClick={() => window.open(image.src, '_blank')}
                      >
                        <FiEye />
                      </button>
                      <button 
                        className="overlay-btn edit"
                        onClick={() => handleEdit(image)}
                      >
                        <FiEdit2 />
                      </button>
                      <button 
                        className="overlay-btn delete"
                        onClick={() => handleDelete(image.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <div className="image-info">
                    <h4>{image.title}</h4>
                    <div className="image-meta">
                      <span className="image-category">
                        {categories.find(c => c.value === image.category)?.label}
                      </span>
                      <span className="image-date">
                        {new Date(image.date).toLocaleDateString()}
                      </span>
                    </div>
                    {image.description && (
                      <p className="image-description">{image.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="manager-tips">
          <h4>Gallery Management Tips</h4>
          <ul>
            <li>Upload high-quality images with clear focus</li>
            <li>Always add descriptive alt text for accessibility</li>
            <li>Organize images into appropriate categories</li>
            <li>Compress large images before uploading for faster loading</li>
            <li>Regularly review and remove outdated images</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryManager;